import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as productsData from '../../assets/products-list.json';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  Products:any;
  Data:any=productsData;
  productDetails:any;

constructor(private activatedroute:ActivatedRoute){this.Products=this.Data.default;}
ngOnInit(): void {
  const productId=this.activatedroute.snapshot.params['id'];
  this.productDetails=this.Products.find((product:any)=>product.id == productId);
  console.log(this.productDetails);

}
}
