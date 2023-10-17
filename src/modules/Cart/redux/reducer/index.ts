import {ActionTypes} from '../types';

const initialState = {
  loader: false,
  productList: [],
  cart: {},
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_LOADER:
      return {
        ...state,
        loader: action.status,
      };
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        productList: action.productList,
      };
    case ActionTypes.UPDATE_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.data.id]: action.data,
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
