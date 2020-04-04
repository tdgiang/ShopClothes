import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../../DetailProduct/detail/detail';
import Cart from '../cart';


function CartScreen({ navigation }) {
    return (
      <Cart navCart={navigation}  />
    );
}
function DetailScreen({ navigation }) {
    return (
    <Detail navCart={navigation}  />
    );
}


const Stack = createStackNavigator();

export default  function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Cart" >
      <Stack.Screen
       name="Cart" component={CartScreen} 
       options={{
        headerStyle: { opacity:0,height:0 },
      }}
       
       />
      <Stack.Screen 
      name="Detail" component={DetailScreen} 
      options={{
        headerStyle: { opacity:0,height:0 },
      }}
      />
    </Stack.Navigator>
  );
}