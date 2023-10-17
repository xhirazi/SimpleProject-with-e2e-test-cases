import React from 'react';
import ProductScreen from '../screens/ProductScreen';
import Checkout from '../screens/Checkout';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={ProductScreen} />
    <Stack.Screen name="Cart" component={Checkout} />
  </Stack.Navigator>
);

export default CartStack;
