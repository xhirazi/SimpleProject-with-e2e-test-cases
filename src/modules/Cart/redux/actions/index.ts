import {product, productList} from '@Cart/interfaces/responses';
import {ActionTypes} from '../types';

export const getProductRequest = () => ({
  type: ActionTypes.PRODUCTS_REQUEST,
});

export const toggleLoader = (status: boolean) => ({
  type: ActionTypes.TOGGLE_LOADER,
  status,
});

export const setProducts = (productList: productList) => ({
  type: ActionTypes.SET_PRODUCTS,
  productList,
});

export const updateCart = (data: product) => ({
  type: ActionTypes.UPDATE_CART,
  data,
});
