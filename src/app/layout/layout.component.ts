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
  // Show the banner only on Monday (0=Sun, 1=Mon, ... 6=Sat)
  isMonday: boolean = new Date().getDay() === 1;
}
