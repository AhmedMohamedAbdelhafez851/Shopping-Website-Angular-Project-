import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ItemBoxComponent implements OnInit {
  @Input() item: any;

  constructor(private router: Router , private cartService: CartService 
  ) { }

  ngOnInit(): void {
    console.log('Items:', this.item);
  }

  openCart(event: Event): void {
    event.stopPropagation(); // Prevent navigation
    console.log(`${this.item.name} added to cart.`);
  }

  navigateToDetails(event?: Event): void {
    if (event) {
      event.stopPropagation(); // Prevent click event from bubbling up
    }
    this.router.navigate(['/item-details', this.item.id] );
    
  }
  addToCart(): void {
    if (this.item) {
      this.cartService.addToCart(this.item);
      console.log('Item added to cart:', this.item);
    }

    // Redirect to the cart page
  this.router.navigate(['/cart']);


  }
}
