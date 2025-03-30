import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bakery',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit {
  bakeryMenu: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/bakery.json').subscribe(data => {
      // Assuming the JSON structure is: { "bakeryMenu": [...] }
      this.bakeryMenu = data.bakeryMenu;
    });
  }
}
