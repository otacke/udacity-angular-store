import Cart from './cart';

type Order = {
  cart: Cart,
  fullName: string,
  address: string,
  creditCardNumber: string
};

export default Order;
