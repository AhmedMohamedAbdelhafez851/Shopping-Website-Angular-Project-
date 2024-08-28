import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  form = new FormGroup ({
    firstName: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    lastName: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    userMessage: new FormControl ('', [Validators.required]),
  })

  submit() {
    console.log(this.form.value);
  }
}
