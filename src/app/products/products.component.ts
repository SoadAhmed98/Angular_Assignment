import { Component } from '@angular/core';
import * as productsData from '../../assets/products-list.json';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  Products:any;
  Data:any=productsData;
  constructor(){
    this.Products=this.Data.default;
    console.log(this.Products);

  }

}
