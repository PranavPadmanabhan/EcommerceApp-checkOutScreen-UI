import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductPage from './screens/Product/ProductPage';
import Checkout from './screens/Checkout/Checkout';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='productPage'>
        <Stack.Screen name="productPage" component={ProductPage} options={{headerShown:false}}/>
        <Stack.Screen name="checkout" component={Checkout} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App