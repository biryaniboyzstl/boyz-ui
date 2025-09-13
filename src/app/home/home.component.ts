import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // Thali pricing (weekdays only)
  vegThaliPrice: number = 12.99;
  chickenThaliPrice: number = 14.99;
  muttonThaliPrice: number = 16.99;
  
  isWeekday!: boolean;
  isWeekend!: boolean;

  ngOnInit(): void {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 6 = Saturday
    // Thalis are only available Tuesday-Friday (day 2-5)
    this.isWeekday = (day >= 2 && day <= 5);
    // Buffets are only available Saturday-Sunday (day 0, 6)
    this.isWeekend = (day === 0 || day === 6);
  }
}
