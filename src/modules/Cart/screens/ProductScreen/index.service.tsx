import {product} from '@Cart/interfaces/responses';
import {getProductRequest, updateCart} from '@Cart/redux/actions';
import {useNavigation} from '@react-navigation/core';
import {useAppSelector} from '@redux/root-reducer';
import {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {ScreenTypes} from '../../interfaces';

/* component containing the business logic separated from view for
 api call trigger */
const ProductServiceComponent = ({children}: ScreenTypes.screen) => {
  //navigation
  const navigation = useNavigation();

  // reducer
  let loader = useAppSelector(state => state?.cartReducer?.loader);
  let productList = useAppSelector(state => state?.cartReducer?.productList);
  let cartList = useAppSelector(state => state?.cartReducer?.cart);

  const dispatch = useDispatch(); // dispatch action to reducer

  //action
  const onUpdateCart = (data: product) => dispatch(updateCart(data));

  //saga
  const onGetProductRequest = () => dispatch(getProductRequest());

  //cDM
  useEffect(() => {
    onGetProductRequest();
  }, []);

  const onPressCart = useCallback((item, quantity) => {
    quantity >= 0 && onUpdateCart({...item, quantity});
  }, []);

  const gotoCart = useCallback(() => navigation.navigate('Cart'), [navigation]);
  return children({
    loader,
    productList,
    cartList,
    onPressCart,
    gotoCart,
  } as ScreenTypes.product);
};

export default ProductServiceComponent;
