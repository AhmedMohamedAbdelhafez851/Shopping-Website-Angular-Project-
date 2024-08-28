import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Item } from '../../Interfaces/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class CartComponent implements OnInit {
  cartItems: Item[] = [];
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  // Method to calculate the total price of all items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      const itemTotal = (item.salesprice || 0) * (item.quantity || 0);
      return total + itemTotal;
    }, 0);
  }

  // Method to handle quantity change
  updateQuantity(item: Item, newQuantity: number): void {
    if (newQuantity > 0) {
      item.quantity = newQuantity;
      this.cartService.updateCartItemQuantity(item);
    }
  }

  // Method to remove item from cart
  removeItem(itemId: string): void {
    this.cartService.removeCartItem(itemId);
    this.cartItems = this.cartService.getCartItems(); // Refresh cart items
  }
}
