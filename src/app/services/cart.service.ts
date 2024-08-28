import { Injectable } from '@angular/core';
import { Item } from '../Interfaces/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Item[] = [];

  constructor() {
    this.loadCartItems(); // Load saved cart items from local storage on service initialization
  }

  addToCart(item: Item | null): void {
    if (item) {
      const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
  
      if (existingItem) {
        // If the item already exists in the cart, increase its quantity safely
        existingItem.quantity = (existingItem.quantity ?? 0) + (item.quantity || 1);
      } else {
        // If the item is new to the cart, add it with a quantity
        this.cartItems.push({ ...item, quantity: item.quantity || 1 });
      }
  
      this.saveCartItems(this.cartItems);
    }
  }
  

  // Retrieve cart items
  getCartItems(): Item[] {
    return this.cartItems;
  }

  // Clear the cart
  clearCart(): void {
    this.cartItems = [];
    this.saveCartItems(this.cartItems);
  }

  // Save cart items to local storage or other storage
  saveCartItems(items: Item[]): void {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }

  // Load cart items from local storage
  loadCartItems(): void {
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      this.cartItems = JSON.parse(savedItems);
    }
  }

  // Update the quantity of an item in the cart
  updateCartItemQuantity(updatedItem: Item): void {
    const index = this.cartItems.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.cartItems[index].quantity = updatedItem.quantity || 1;
      this.saveCartItems(this.cartItems);
    }
  }

  // Remove an item from the cart
  removeCartItem(itemId: string): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.saveCartItems(this.cartItems);
  }

  // Calculate the total price of all items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.salesprice || 0) * (item.quantity || 1);
    }, 0);
  }
}
