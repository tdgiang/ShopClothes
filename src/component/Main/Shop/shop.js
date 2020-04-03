import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './myTab';
import Header from './header';
 export default class Shop extends Component {

    openMenu(){
        this.props.navigation.openDrawer()
    }
      
     render() {
         return (
            <NavigationContainer  independent={true} >
                <Header openMenu={this.openMenu.bind(this)} />
                <MyTabs />
          </NavigationContainer>
             
         );
     }
 }

