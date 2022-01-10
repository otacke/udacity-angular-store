import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import Product from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit, OnDestroy {
  private productData!: Subscription;
  products!: Product[];

  /**
   * @constructor
   * @param {ProductService} productService Product service.
   */
  constructor(private productService: ProductService) {
  }

  /**
   * Handle life cycle ngOnInit.
   */
  ngOnInit(): void {
    // Get product list
    this.productData = this.productService.getProductList().subscribe((data) => {
      this.products = data;
    });
  }

  /**
   * Handle life cycle ngOnDestroy.
   */
  ngOnDestroy(): void {
    // Clean up Observable listener
    this.productData.unsubscribe();
  }
}
