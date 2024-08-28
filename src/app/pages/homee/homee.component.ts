import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../Interfaces/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemBoxComponent } from '../item-box/item-box.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemBoxComponent, HttpClientModule],
  templateUrl: './homee.component.html',
  styleUrls: ['./homee.component.scss']
})
export class HomeeComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    // Fetch items from the service
    this.itemsService.getItems().subscribe({
      next: (data) => this.items = data,
      error: (err) => console.error('Error fetching items', err)
    });

    // Dynamically load an external script
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.src = '../assets/js/script.js'; // Ensure the path is correct
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
