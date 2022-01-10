import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import Product from '../../models/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})

export class ProductListItemComponent {
  @Input() product!: Product;
  quantity: number = 0;
  /**
   * @constructor
   * @param {CartService} cartService Cart service.
   */
  constructor(private cartService: CartService) {
  }

  /**
   * Handle item added to cart.
   */
  handleItemAdded(): void {
    this.cartService.addToCart(this.product, this.quantity);

    alert(`We have put ${this.quantity} piece${this.quantity === 1 ? '' : 's'} of ${this.product.name} into your shopping cart.`);

    // Reset value in form
    this.quantity = 0;
  }
}
