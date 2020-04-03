import React, { Component } from 'react';
import { 
    View,
    FlatList
 } from 'react-native';
 import dataOrder from '../../data/dataOrder';
import ItemOrder from './itemOrder';
import {renderHeader} from '../../func/function';
 export default class OrderHistory extends Component {
     
     render() {
         return (
             <View style={{flex:1}}  >
               {renderHeader('Order History')}
               <FlatList
                    data={dataOrder}
                    renderItem={({item})=><ItemOrder order={item} />}
                />
             </View>
             
         );
     }
 }