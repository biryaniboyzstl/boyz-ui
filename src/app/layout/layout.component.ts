// src/app/layout/layout.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // ✅ import CommonModule

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule], // ✅ add CommonModule here
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  // Day logic (0=Sun, 1=Mon, ... 6=Sat)
  isMonday: boolean = new Date().getDay() === 1;
  isWeekend: boolean = new Date().getDay() === 0 || new Date().getDay() === 6; // Saturday or Sunday
  isWeekday: boolean = new Date().getDay() >= 2 && new Date().getDay() <= 5; // Tuesday to Friday
}
