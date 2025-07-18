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
  buffetPrice!: number;
  kidsPrice!: number;
  isWednesday: boolean = false;
  isWeekendDinner: boolean = false;
  isWeekend!: boolean;


  ngOnInit(): void {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 6 = Saturday
    // Weekends (Saturday=6, Sunday=0) use $20.99; Weekdays use $15.99
    this.buffetPrice = (day === 0 || day === 6 ) ? 16.99 : 12.99;
    // Kids (12 and under) pay half of the adult price.
    this.kidsPrice = parseFloat((this.buffetPrice / 2).toFixed(2));
    this.isWednesday = (day === 3);
    this.isWeekendDinner = (day === 5 || day === 6 || day === 0); // Friday=5, Saturday=6, Sunday=0

    this.isWeekend = (day === 0 || day === 6);

  }
}
