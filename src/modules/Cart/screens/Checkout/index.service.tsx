import {product} from '@Cart/interfaces/responses';
import {updateCart} from '@Cart/redux/actions';
import {useAppSelector} from '@redux/root-reducer';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {ScreenTypes} from '../../interfaces';

/* component containing the business logic separated from view for
 api call trigger */
const CartServiceComponent = ({children}: ScreenTypes.screen) => {
  let productList = useAppSelector(state => state?.cartReducer?.productList);
  let cartList = useAppSelector(state => state?.cartReducer?.cart);
  const dispatch = useDispatch(); // dispatch action to reducer

  //action
  const onUpdateCart = (data: product) => dispatch(updateCart(data));

  const onPressCart = useCallback((item, quantity) => {
    quantity >= 0 && onUpdateCart({...item, quantity});
  }, []);

  return children({
    productList,
    cartList,
    onPressCart,
  } as ScreenTypes.cart);
};

export default CartServiceComponent;
