import {product} from '@Cart/interfaces/responses';
import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';
interface PROPS {
  item: product;
  quantity: number;
  index: number;
  onPress: (id: product, quantity: number) => void;
}
const Cart = ({item, quantity, onPress, index}: PROPS) => {
  const addToCart = useCallback(() => {
    if (quantity > 0) {
      // check id null or unbdefinded
      onPress(item, quantity + 1);
    } else {
      onPress(item, 1);
    }
  }, [quantity, item]);

  const removeToCart = useCallback(
    () => onPress(item, quantity - 1),
    [quantity, item],
  );
  return (
    <View>
      {quantity > 0 ? (
        <View
          testID={`item${index}`}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button title={'-'} onPress={removeToCart} testID={`sub${index}`} />
          <Text testID={`quantity${index}`}>({quantity})</Text>
          <Button title={'+'} onPress={addToCart} testID={`add${index}`} />
        </View>
      ) : (
        <Button
          title={'Add to cart'}
          onPress={addToCart}
          testID={`addto${index}`}
        />
      )}
    </View>
  );
};

export default Cart;
