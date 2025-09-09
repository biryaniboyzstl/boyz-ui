import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // Thali pricing (same for kids and adults)
  vegThaliPrice: number = 11.99;
  chickenThaliPrice: number = 13.99;
  muttonThaliPrice: number = 14.99;
  
  isWeekend!: boolean;

  ngOnInit(): void {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 6 = Saturday
    this.isWeekend = (day === 0 || day === 6);
  }
}
