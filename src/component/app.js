import React, { Component } from 'react';

 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';

 import Authentication from './Authentication/authentication';
 import ChangeInfo from './ChangeInfo/changeInfo';
 import Main from './Main/main';
 import OrderHistory from './OrderHistory/orderHistory';
 

 function authenticationScreen({ navigation }) {
    return (
        <Authentication navigation={navigation} />
     
    );
  }
  
  function changeInfoScreen({ navigation }) {
    return (
      <ChangeInfo navigation={navigation}  />
    );
  }
  function mainScreen({ navigation }) {
    return (
        <Main navigation={navigation} />
     
    );
  }
  
  function orderHistoryScreen({ navigation }) {
    return (
      <OrderHistory navigation={navigation}  />
    );
  }
  
const Stack = createStackNavigator();



   

function App() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name="Main" component={mainScreen} />
                    <Stack.Screen name="OrderHistory" component={orderHistoryScreen} />
                    <Stack.Screen name="ChangeInfo" component={changeInfoScreen} />
                    <Stack.Screen name="Authentication" component={authenticationScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            
        );
}


export default App;