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


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 6 = Saturday
    // Weekends (Saturday=6, Sunday=0) use $20.99; Weekdays use $15.99
    this.buffetPrice = (day === 0 || day === 6) ? 20.99 : 15.99;
    this.http.get<any>('assets/menu.json').subscribe(data => {
      // Assuming JSON structure: { "menu": [...] }
      this.menu = data.menu;

      // Add an expanded property to each category and subcategory for toggle functionality.
      this.menu.forEach((category: any) => {
        category.expanded = false;
        if (category.subcategories) {
          category.subcategories.forEach((sub: any) => {
            sub.expanded = false;
          });
        }
      });

    });
  }
}
