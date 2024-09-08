import {Product} from './apiDataTypes';

export type CartItem = {
  items: Product[];
  totalQty: number;
  totalPrice: number;
};
