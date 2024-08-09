import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent , NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products = {
    details : [
       {
        name: 'Hot Coffee',
        description: 'with Milk',
        image: '../../../../assets/coff.jpg',
        rate: '💸20.00'
       },
       {
        name: 'Espresso Coffee',
        description: 'with Milk',
        image: '../../../../assets/Espresso coffee.jpg',
        rate: '💸70.00'
       },
       {
        name: 'Cappuccino Coffee',
        description: 'with Chocolate',
        image: '../../../../assets/Cappucino coffee.jpg',
        rate: '💸20.00'
       },
       {
        name: 'Latte Art Coffee',
        description: 'with Milk',
        image: '../../../../assets/artt.jpg',
        rate: '💸100.00'
       },
       {
        name: 'Black Coffee',
        description: 'with water',
        image: '../../../../assets/Black coffee.jpg',
        rate: '💸15.00'
       },
       {
        name: 'Special coffee',
        description: 'with special ingredients',
        image: '../../../../assets/Black cofeee product.jpg',
        rate: '💸30.00'
       }
    ]
  }

  scrollLeft() {
    const container = document.querySelector('.product-container') as HTMLElement;
    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
  }

  scrollRight() {
    const container = document.querySelector('.product-container') as HTMLElement;
    container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
  }

}
