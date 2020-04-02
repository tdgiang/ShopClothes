import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './myTab';

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