import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [


  {
    path:'',
    component: ProductsComponent,
    title:"All Products"
  },
  {
    path:'product-details/:id',
    component: ProductdetailsComponent,
    title:"Product details"
  },
  {
   path:'login',
   component:LoginComponent,
   title:"Login"
  }
  ,
  {
    path:'register',
    component:RegisterComponent,
    title:"Register"
  },
  {
    path:'cart',
    component:CartComponent,
    title:"Cart"
  },
  {
    path:'**',
    component:NotfoundComponent,
    title:"Not Found page"
  }
];
