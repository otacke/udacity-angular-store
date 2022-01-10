import CartItem from './cart-item';

type Cart = {
  items: { [id: number]: CartItem } | null,
  cartValue: number
};

export default Cart;
