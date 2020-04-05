import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../../DetailProduct/detail/detail';
import Search from '../search';


function SearchScreen({ navigation }) {
    return (
      <Search navSearch={navigation}  />
    );
}
function DetailScreen({route, navigation }) {
    return (
    <Detail navSearch={navigation} route={route} />
    );
}


const Stack = createStackNavigator();

export default  function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Search" >
      <Stack.Screen
       name="Search" component={SearchScreen} 
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