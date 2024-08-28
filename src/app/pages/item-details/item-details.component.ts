import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../Interfaces/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'], 
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class ItemDetailsComponent implements OnInit {
  item: Item | null = null;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService , 
    private cartService: CartService ,
    private router: Router 
    
    
  ) {}

  ngOnInit(): void {
    
    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      const numericItemId = Number(itemId);
      if (!isNaN(numericItemId)) {
        this.loadItem(numericItemId);
      } else {
        this.errorMessage = 'Invalid Item ID';
      }
    } else {
      this.errorMessage = 'No Item ID provided';
    }

    // Scroll to the top or center of the page when the component is loaded
    window.scrollTo({
      top: 150, // Adjust this value as needed to center or set the position
      behavior: 'smooth' // Smooth scroll effect
    });
    // Dynamically load an external script
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../assets/js/script.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  private loadItem(itemId: number): void {
    this.itemService.getItemById(itemId).subscribe(data => {
      this.item = data;
    }, error => {
      this.errorMessage = 'Error fetching item details: ' + error.message;
    });
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
