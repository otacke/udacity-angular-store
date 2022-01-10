import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';
import CartItem from '../../models/cart-item';
import Product from '../../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent {
  @Input() product!: Product;
  @Input() quantity!: number;
  @Output() quantityEmitter: EventEmitter<CartItem> = new EventEmitter();

  /**
   * @constructor
   * @param {CartService} cartService Cart service to use.
   */
  constructor(private cartService: CartService) {
  }

  /**
   * Handler for quantity change in form.
   * @param {number} quantity Quantity set by user.
   */
  handleQuantityChanged(quantity:number): void {
    this.quantityEmitter.emit({
      product: this.product,
      quantity: quantity
    });
  }
}
