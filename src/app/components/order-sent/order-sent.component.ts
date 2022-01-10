import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import Order from '../../models/order';

@Component({
  selector: 'app-order-sent',
  templateUrl: './order-sent.component.html',
  styleUrls: ['./order-sent.component.scss']
})

export class OrderSentComponent implements OnInit {
  orderDetails!: Order;

  /**
   * @constructor
   * @param {CartService} cartService Cart service.
   */
  constructor(private cartService: CartService) {
  }

  /**
   * Handle life cycle ngOnInit.
   */
  ngOnInit(): void {
    this.orderDetails = this.cartService.getOrder();
  }
}
