import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './detail/detail';
import Home from '../home/home';
import ListProduct from '../home/listProduct/listProduct';


function HomeScreen({ navigation }) {
    return (
      <Home nav={navigation}  />
    );
}
function DetailScreen({ navigation }) {
    return (
    <Detail nav={navigation}  />
    );
}
function ListProductScreen({ navigation }) {
    return (
      <ListProduct nav={navigation}  />
    );
}

const Stack = createStackNavigator();

export default  function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen
       name="Home" component={HomeScreen} 
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
      <Stack.Screen 
      name="ListProduct" component={ListProductScreen} 
      options={{
        headerStyle: { opacity:0,height:0 },
      }}
      />
    </Stack.Navigator>
  );
}