import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import Product from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit, OnDestroy {
  private routeParams!: Subscription;
  private productData!: Subscription;
  id!: number;
  product!: Product;
  quantity: number = 0;

  /**
   * @constructor
   * @param {CartService} cartService Cart service.
   * @param {ActivatedRoute} route Route with product id.
   * @param {ProductService} productService Product service.
   */
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    // Dummy product
    this.product = { id: 0, name: 'dummy', price: 0, url: '', description: '' };
  }

  /**
   * Handle item added to cart.
   */
  handleItemAdded(): void {
    this.cartService.addToCart(this.product, this.quantity);

    alert(`We have put ${this.quantity} piece${this.quantity === 1 ? '' : 's'} of ${this.product.name} into your shopping cart.`);
  }

  /**
   * Handle life cycle ngOnInit.
   */
  ngOnInit(): void {
    this.routeParams = this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
    });

    this.productData = this.productService.getProductList().subscribe((data) => {
      this.product = data.filter((product) => (product.id === this.id))[0];
    });
  }

  /**
   * Handle life cycle ngOnDestroy.
   */
  ngOnDestroy(): void {
    // Clean up Observables listeners
    this.routeParams.unsubscribe();
    this.productData.unsubscribe();
  }
}
