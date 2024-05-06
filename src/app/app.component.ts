import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent,NavComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EcommerceApp';
}
