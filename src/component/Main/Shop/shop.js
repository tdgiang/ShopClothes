import React, { Component } from 'react';
import { 
    View, Text,TouchableOpacity
 } from 'react-native';


 export default class Shop extends Component {
      
     render() {
         return (
             <View>
                <Text>Shop</Text>

                <TouchableOpacity onPress={()=>this.props.onOpen()} >
                    <Text>Open</Text>
                </TouchableOpacity>
             </View>
             
         );
     }
 }