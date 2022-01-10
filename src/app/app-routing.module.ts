import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { DeliveryDataComponent } from './components/delivery-data/delivery-data.component';
import { OrderSentComponent } from './components/order-sent/order-sent.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: DeliveryDataComponent },
  { path: 'products/:id', component: ProductItemComponent },
  { path: 'order', component: OrderSentComponent },
  { path: '**', redirectTo: '/'} // Catch all other calls
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
