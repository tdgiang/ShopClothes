import React, { Component } from 'react';
import { 
    View, Text,TouchableOpacity,Image
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './cart/cart';
import Contact from './contact/contact';
import Home from './home/home';
import Search from './search/search';

const iconHomeSelect=require('../../../images/appIcon/home.png');
const iconHome=require('../../../images/appIcon/home0.png');
const iconCartSelect=require('../../../images/appIcon/cartSelect.png');
const iconCart=require('../../../images/appIcon/cart.png');
const iconSearch=require('../../../images/appIcon/search0.png');
const iconSearchSelect=require('../../../images/appIcon/search.png');
const iconContact=require('../../../images/appIcon/contact0.png');
const iconContactSelect=require('../../../images/appIcon/contact.png');
function HomeScreen() {
    return (
      <Home />
    );
}

function CartScreen() {
    return (
      <Cart/>
    );
}

function SearchScreen() {
    return (
      <Search />
    );
}

function ContactScreen() {
    return (
      <Contact />
    );
  }
  
const Tab = createBottomTabNavigator();
  
function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
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
          // You can return any component that you like here!
          return <Image source={iconName}  style={{width:30,height:30}} />;
        },
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
 export default class Shop extends Component {
      
     render() {
         return (
            <NavigationContainer  independent={true} >
            <MyTabs />
          </NavigationContainer>
             
         );
     }
 }


//  <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
//                     <Text>Open</Text>
//                 </TouchableOpacity>