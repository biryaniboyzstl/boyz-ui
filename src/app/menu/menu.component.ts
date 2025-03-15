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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
