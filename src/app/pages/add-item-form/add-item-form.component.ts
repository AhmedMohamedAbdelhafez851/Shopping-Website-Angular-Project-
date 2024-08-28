

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ItemsService } from '../../services/items.service'; // Adjust the path as needed
import { Item } from '../../Interfaces/Item'; // Adjust the path as needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'] , 
  standalone: true , 
  imports:[CommonModule , FormsModule, ReactiveFormsModule]
})
export class AddItemFormComponent {
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private itemsService: ItemsService) {
    this.itemForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      salesprice: ['', [Validators.required, Validators.min(0)]],
      purchasePrice: [''],
      categoryName: ['']
    });
  }

  onSubmit() {
    if (this.itemForm.valid) {
      const newItem: Item = {
        ...this.itemForm.value,
        id: (Math.random() * 10000).toString() // Generate a unique ID
      };

      this.itemsService.createItem(newItem).subscribe(
        (response) => {
          console.log('Item added successfully:', response);
        },
        (error) => {
          console.error('Error adding item:', error);
        }
      );
    }
  }
}


