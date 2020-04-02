import React, { Component } from 'react';
import {View, Text } from 'react-native'
import Menu from './Menu';
import Shop from './Shop/shop';
 export default class Main extends Component {

     
     
     render() {
         return (
            <View>
                <Text></Text>

            </View>
             
         );
     }
 }
//  goToScreen(name){
//     console.log(this.props.navigation.push(name));
    
// };
//  <TouchableOpacity onPress={this.goToScreen.bind(this,"Authentication")}  >
//                     <Text>Go Authentication</Text>
//                  </TouchableOpacity>
//                  <TouchableOpacity onPress={this.goToScreen.bind(this,"ChangeInfo")}>
//                     <Text>Go ChangeInfo</Text>
//                  </TouchableOpacity>
//                  <TouchableOpacity onPress={this.goToScreen.bind(this,"OrderHistory")}>
//                     <Text>Go OrderHistory</Text>
//                  </TouchableOpacity>