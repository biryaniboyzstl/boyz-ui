import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class MenuComponent implements OnInit {
  menu: any[] = [];
  isWednesday: boolean = false;
  activeCategory: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, …, 3 = Wednesday, …, 6 = Saturday

    this.isWednesday = (day === 3);

    this.http.get<any>('assets/menu.json').subscribe(data => {
      // grab the raw menu
      let loadedMenu: any[] = data.menu;

      // if today is NOT Wednesday, strip out the Wednesday Biryani category
      if (!this.isWednesday) {
        loadedMenu = loadedMenu.filter(cat =>
          cat.category !== 'WEDNESDAY BIRYANI SPECIALS'
        );
      }

      // now assign & initialize your expand flags
      this.menu = loadedMenu;
      this.menu.forEach((category: any) => {
        category.expanded = false;
        if (category.subcategories) {
          category.subcategories.forEach((sub: any) => sub.expanded = false);
        }
      });

      // Expand first category by default
      if (this.menu.length > 0) {
        this.menu[0].expanded = true;
      }
    });
  }

  toggleCategory(index: number): void {
    this.menu[index].expanded = !this.menu[index].expanded;
  }

  toggleSubcategory(category: any, subcategory: any): void {
    subcategory.expanded = !subcategory.expanded;
  }

  scrollToCategory(categoryName: string, index: number): void {
    this.activeCategory = index;
    const element = document.getElementById(`category-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getItemTypeClass(type: string): string {
    switch (type.toLowerCase()) {
      case 'vegetarian':
      case 'veg':
        return 'bg-success';
      case 'non-vegetarian':
      case 'non-veg':
        return 'bg-warning';
      case 'spicy':
        return 'bg-danger';
      case 'mild':
        return 'bg-info';
      default:
        return 'bg-secondary';
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    // Update active category based on scroll position
    const categories = document.querySelectorAll('.menu-category');
    let current = '';
    
    categories.forEach((category, index) => {
      const rect = category.getBoundingClientRect();
      if (rect.top <= 100) {
        current = index.toString();
      }
    });
    
    if (current) {
      this.activeCategory = parseInt(current);
    }
  }
}