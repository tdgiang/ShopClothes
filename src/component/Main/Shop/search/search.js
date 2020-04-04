import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    FlatList
 } from 'react-native';
 
import ItemSearch from './itemSearch';
import dataCart from '../../../../data/dataCart';
 export default class Search extends Component {
     
     render() {
      
         return (
             <View style={{flex:1,backgroundColor:'#e6e6e6'}}  >
                  <FlatList
                        data={dataCart}
                        renderItem={({item})=><ItemSearch item={item} navSearch={this.props.navSearch} />}

                    />      
             </View>
             
         );
     }
 }