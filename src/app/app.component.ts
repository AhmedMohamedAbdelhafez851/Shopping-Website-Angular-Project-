import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/header/header.component';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsComponent } from './pages/posts/posts.component';
import { FormsModule } from '@angular/forms';
import { ItemBoxComponent } from './pages/item-box/item-box.component';
import { CartComponent } from './pages/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ItemBoxComponent,
    HttpClientJsonpModule,
    ServicesComponent,
    ContactComponent,
    PostsComponent,
    CartComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'template-one';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Load the external script
    const body = document.body;
    const script = document.createElement('script');
    script.src = '../assets/js/script.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);

    // Handle fragment navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          // Use setTimeout to allow the browser to render the component before scrolling
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300); // Adjust the delay as needed
        }
      }
    });
  }
}
