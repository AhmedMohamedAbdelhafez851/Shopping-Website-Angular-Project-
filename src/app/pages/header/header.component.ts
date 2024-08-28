import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ItemsService } from '../../services/items.service';
import { CartService } from '../../services/cart.service';
import { Item } from '../../Interfaces/Item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  item: Item | null = null;
  cartItems: Item[] = [];

  constructor(
    private itemService: ItemsService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch cart items
    this.cartItems = this.cartService.getCartItems();

    // Dynamically load external script
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../assets/js/script.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  // Navigate to the cart page
  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  // Navigate to the user page
  MoveUser() {
    this.router.navigate(['/user']);
  }

  // Remove an item from the cart
  removeItemFromCart(itemId: string) {
    this.cartService.removeCartItem(itemId);
    this.cartItems = this.cartService.getCartItems(); // Update cart items after removal
  }

  // Get the subtotal for the cart items
  getSubtotal(): number {
    return this.cartService.getTotalPrice(); // Use CartService's total price method
  }
}
