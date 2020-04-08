import React, { Component } from 'react';
import { 
    Image
 } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartNavigator from './cart/cartNavigator/cartNavigator';
import Contact from './contact/contact';
import HomeNavigator from './home/homeNavigator/homeNavigator';
import SearchNavigator from './search/searchNatigator/searchNavigator';

const iconHomeSelect=require('../../../images/appIcon/home.png');
const iconHome=require('../../../images/appIcon/home0.png');
const iconCartSelect=require('../../../images/appIcon/cartSelect.png');
const iconCart=require('../../../images/appIcon/cart.png');
const iconSearch=require('../../../images/appIcon/search0.png');
const iconSearchSelect=require('../../../images/appIcon/search.png');
const iconContact=require('../../../images/appIcon/contact0.png');
const iconContactSelect=require('../../../images/appIcon/contact.png');

function HomeScreen({navigation}) {
    return (
      <HomeNavigator navTab={navigation} />
    );
}

function CartScreen() {
    return (
      <CartNavigator/>
    );
}

function SearchScreen() {
    return (
      <SearchNavigator />
    );
}

function ContactScreen() {
    return (
      <Contact />
    );
  }

function renderBabBarIcon(focused,route){
    let iconName;
    switch (route.name) {
          case 'Home':
              iconName = focused ? iconHomeSelect:iconHome
              break;
          case 'Cart':
              iconName = focused ? iconCartSelect:iconCart
              break;
          case 'Search':
              iconName = focused ? iconSearchSelect:iconSearch
              break;
          case 'Contact':
              iconName = focused ? iconContactSelect:iconContact
              break; 
    }

    return <Image source={iconName}   style={{width:30,height:30}} />;
  }
  
const Tab = createBottomTabNavigator();
  
export default  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused}) => renderBabBarIcon(focused,route)
      })}

      tabBarOptions={{
        activeTintColor: '#00cc99',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen 
            name="Home" 
            component={HomeScreen}
        />
        <Tab.Screen 
            name="Cart" 
            component={CartScreen} 
           
        />
        <Tab.Screen 
            name="Search" 
            component={SearchScreen}
          
        />
        <Tab.Screen 
            name="Contact" 
            component={ContactScreen} 
        />
      </Tab.Navigator>
    );
}
