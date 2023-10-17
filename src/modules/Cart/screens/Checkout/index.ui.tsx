import {product} from '@Cart/interfaces/responses';
import Cart from '@components/Cart';
import React from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';

//component containing the view of product screen
const CartComponent = ({
  productList,
  cartList,
  onPressCart,
}: ScreenTypes.cart) => {
  return (
    <FlatList
      data={productList}
      renderItem={({item, index}) =>
        cartList[item.id]?.quantity > 0 ? (
          <View style={styles.itemView} testID={`checkoutItem${index}`}>
            <Image style={styles.itemImage} source={{uri: item.img}} />
            <Text style={styles.flex}>{item.name}</Text>
            <Cart
              quantity={cartList[item.id].quantity || 0}
              onPress={onPressCart}
              item={item}
              index={index}
            />
          </View>
        ) : null
      }
      keyExtractor={item => item.name}
    />
  );
};
export default CartComponent;
