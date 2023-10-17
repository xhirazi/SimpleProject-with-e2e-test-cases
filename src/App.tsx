import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from '@redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CartStack from '@Cart/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.flex}>
            <NavigationContainer>
              <CartStack />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
