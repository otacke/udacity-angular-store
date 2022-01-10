import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import Cart from '../../models/cart';
import CartItem from '../../models/cart-item';

@Component({
  selector: 'app-delivery-data',
  templateUrl: './delivery-data.component.html',
  styleUrls: ['./delivery-data.component.scss']
})

export class DeliveryDataComponent implements OnInit {
  cart!: Cart;
  cartItemList!: CartItem[];
  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';

  /**
   * @constructor
   * @param {Router} router Anglar router.
   * @param {CartService} cartService Cart service.
   */
  constructor(private router: Router, private cartService: CartService) {
  }

  /**
   * Update list of items in cart.
   */
  updateItemList(): void {
    if (this.cart.items !== null) {
      this.cartItemList = Object
        .keys(this.cart.items)
        .map((key) => (this.cart.items![parseInt(key)]));
    }
  }

  /**
   * Send order.
   */
  sendOrder(): void {
    this.cartService.setOrder(
      this.fullName,
      this.address,
      this.creditCardNumber
    );

    this.router.navigate(['/order']);
  }

  /**
   * Handle quantity change in form.
   * @param {CartItem} cartItem cart item the change happend on.
   */
  handleQuantityChanged(cartItem: CartItem): void {
    this.cart = this.cartService.updateQuantity(
      cartItem.product.id,
      cartItem.quantity
    );

    this.updateItemList();
  }

  /**
   * Handle life cycle ngOnInit.
   */
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.updateItemList();
  }
}
