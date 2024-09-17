import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {Product} from './apiDataTypes';

export type CartItem = {
  items: Product[];
  totalQty: number;
  totalPrice: number;
};

export type FavItem = {
  favItems: Product[];
};

export type Auth = {
  accessToken: string;
};

export type User = {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  createdAt?: FirebaseFirestoreTypes.Timestamp | Date | any;
};
