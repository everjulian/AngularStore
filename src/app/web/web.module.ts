import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebModule { }
