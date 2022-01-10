import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { DeliveryDataComponent } from './components/delivery-data/delivery-data.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { OrderSentComponent } from './components/order-sent/order-sent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListItemComponent,
    ProductListComponent,
    ProductItemComponent,
    NavigationBarComponent,
    DeliveryDataComponent,
    CartItemComponent,
    OrderSentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
