import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() ProductDetails:any;
constructor(private router:Router) {

}
handleProductdetails(id:number){
this.router.navigate(['product-details',id])
}
}
