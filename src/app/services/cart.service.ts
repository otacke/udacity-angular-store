import { Injectable, EventEmitter } from '@angular/core';
import Cart from '../models/cart';
import Product from '../models/product';
import Order from '../models/order';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  change: EventEmitter<Cart> = new EventEmitter();
  cart!: Cart;
  order!: Order;

  /**
   * @constructor
   */
  constructor() {
    // Initialize with empty cart.
    this.emptyCart();
  }

  /**
   * Empty cart.
   */
  private emptyCart(): void {
    this.cart = { items: null, cartValue: 0 };
  }

  /**
   * Get cart.
   */
  getCart(): Cart {
    return this.cart;
  }

  /**
   * Add product to cart.
   * @param {Product} product Product to add to cart.
   * @param {number} Quantity Number of chosen product.
   */
  addToCart(product: Product, quantity: number): void {
    if (this.cart.items === null) {
      this.cart.items = {};
    }

    // Add item to cart or update quantity
    if (this.cart.items[product.id] === undefined) {
      this.cart.items[product.id] = {
        product: product,
        quantity: quantity
      };
    }
    else {
      this.cart.items[product.id].quantity += quantity;
    }

    // Sum up
    this.cart.cartValue = 0;
    for (let index in this.cart.items ) {
      const item = this.cart.items[index];
      this.cart.cartValue += item.quantity * item.product.price;
    }
  }

  /**
   * Change product quantity.
   * @param {number} productId Product's Id.
   * @param {number} quantity Quantity of products to have in cart.
   * @return {Cart} The changed cart.
   */
  updateQuantity(productId: number, quantity: number): Cart {
    if (this.cart.items !== null && this.cart.items[productId] !== undefined) {

      if (quantity > 0) {
        const item = this.cart.items[productId];
        this.cart.cartValue += (quantity - item.quantity) * item.product.price;
        item.quantity = quantity;
      }
      else {
        // Removed last of the product items
        alert(`We have remove the last item of ${this.cart.items[productId].product.name} from your shopping cart.`);        
        delete this.cart.items[productId];
      }
    }

    return this.cart;
  }

  /**
   * Set order.
   * @param {string} fullName Full name of recipient.
   * @param {string} address Address of the recipient.
   * @param {string} creditCardNumber Credit card number.
   */
  setOrder(fullName: string, address: string, creditCardNumber: string): void {
    this.order = {
      cart: this.cart,
      fullName: fullName,
      address: address,
      creditCardNumber: creditCardNumber
    };
  }

  /**
   * Get order.
   * @return {Order} Order.
   */
  getOrder(): Order {
    const placedOrder = this.order;

    this.setOrder('', '', '');
    this.emptyCart();

    return placedOrder;
  }
}
