import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class MenuComponent {
  menu: any[] = [];
  buffetPrice!: number;
  kidsPrice!: number;
  isWednesday: boolean = false;
  isWeekendDinner: boolean = false;

  constructor(private http: HttpClient) { }

 ngOnInit(): void {
  const today = new Date();
  const day = today.getDay(); // 0 = Sunday, …, 3 = Wednesday, …, 6 = Saturday

  this.buffetPrice    = (day === 0 || day === 6) ? 20.99 : 15.99;
  this.kidsPrice      = parseFloat((this.buffetPrice / 2).toFixed(2));
  this.isWednesday    = (day === 3);
  this.isWeekendDinner= (day === 5 || day === 6 || day === 0);

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
  });
}

}
