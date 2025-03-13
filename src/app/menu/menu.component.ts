import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule],
})
export class MenuComponent {
  appetizers = [
    { name: 'Medu Vada', description: 'Crispy lentil doughnuts served with chutney and sambar.', price: 6, image: 'assets/medu-vada.jpg' },
    { name: 'Masala Papad', description: 'Crispy papad topped with onion, tomato, and spices.', price: 4, image: 'assets/masala-papad.jpg' },
    { name: 'Paneer Tikka', description: 'Grilled marinated cottage cheese with Indian spices.', price: 8, image: 'assets/paneer-tikka.jpg' },
  ];

  mainCourses = [
    { name: 'Hyderabadi Biryani', description: 'Aromatic rice dish cooked with spices and chicken.', price: 12, image: 'assets/biryani.jpg' },
    { name: 'Masala Dosa', description: 'Crispy dosa stuffed with spiced potato filling.', price: 10, image: 'assets/masala-dosa.jpg' },
    { name: 'Paneer Butter Masala', description: 'Cottage cheese in a creamy tomato-based gravy.', price: 14, image: 'assets/paneer-butter-masala.jpg' },
  ];

  desserts = [
    { name: 'Gulab Jamun', description: 'Soft and spongy milk dumplings soaked in sugar syrup.', price: 5, image: 'assets/gulab-jamun.jpg' },
    { name: 'Rasgulla', description: 'Sweet spongy balls made with chenna and dipped in syrup.', price: 5, image: 'assets/rasgulla.jpg' },
    { name: 'Mango Kulfi', description: 'Traditional Indian ice cream made with mango.', price: 6, image: 'assets/mango-kulfi.jpg' },
  ];
}
