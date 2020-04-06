import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  App from '../../app';
import Authentication from  '../authentication';


function AppScreen({ navigation }) {
    return (
      <App navAuthen={navigation}  />
    );
}
function AuthenticationScreen({  navigation }) {
    return (
    <Authentication navAuthen={navigation} />
    );
}


const Stack = createStackNavigator();

export default  function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Authen" >
      <Stack.Screen
       name="App" component={AppScreen} 
       options={{
        headerStyle: { opacity:0,height:0 },
      }}
       
       />
      <Stack.Screen 
      name="Authen" component={AuthenticationScreen} 
      options={{
        headerStyle: { opacity:0,height:0 },
      }}
      />
    </Stack.Navigator>
  );
}