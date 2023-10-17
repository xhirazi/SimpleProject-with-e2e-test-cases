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
const ProductComponent = ({
  loader,
  productList,
  cartList,
  onPressCart,
  gotoCart,
}: ScreenTypes.product) => {
  console.log(cartList.length);

  return (
    <View style={styles.mainView}>
      <FlatList
        testID={'productList'}
        data={productList}
        ListHeaderComponent={() => (
          <Button
            testID={'checkoutButton'}
            title="Checkout"
            onPress={gotoCart}
          />
        )}
        ListEmptyComponent={() =>
          loader ? null : <Text>No Product Available</Text>
        }
        renderItem={({item, index}) => (
          <View style={styles.itemView} testID={`product${index}`}>
            <Image style={styles.itemImage} source={{uri: item.img}} />
            <View style={styles.flex}>
              <Text>{item.name}</Text>
              <Text>Price: {item.price}</Text>
              <Text>
                <Text>Colour: </Text>
                <Text style={{color: item.colour.toLowerCase()}}>
                  {item.colour}
                </Text>
              </Text>
              <Cart
                quantity={cartList[item.id]?.quantity || 0}
                onPress={onPressCart}
                item={item}
                index={index}
              />
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.seprator} />}
        keyExtractor={item => item.name}
      />
      {loader && (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};
export default ProductComponent;
