import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    FlatList
 } from 'react-native';
import styles from '../../../../styles/styles';
import ItemCart from './itemCart';
import dataCart from '../../../../data/dataCart';
 export default class Cart extends Component {
     
     render() {
         const {btnTotal,txtBigWhite}=styles
         return (
             <View style={{flex:1,backgroundColor:'#e6e6e6'}}  >
                <View  style={{flex:1}} >
                    <FlatList
                        data={dataCart}
                        renderItem={({item})=><ItemCart item={item} navCart={this.props.navCart} />}

                    />
                     
                </View>
                <TouchableOpacity style={btnTotal} >
                    <Text style={txtBigWhite}>TOTAL 350$ CHECKOUT NOW</Text>
                </TouchableOpacity>
             </View>
             
         );
     }
 }