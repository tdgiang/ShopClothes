import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    FlatList
 } from 'react-native';
import styles from '../../../../../styles/styles';
import ItemTopProduct from './itemTopProduct';
import dataTopProduct from '../../../../../data/dataTopProduct';

export default class TopProduct extends Component {
     
     render() {
         const  {containerTopProfuct,txtTitle}=styles
         return (
             <View style={containerTopProfuct}  >
                    <Text style={txtTitle} >Top Product</Text>
                    <FlatList
                        style={{paddingHorizontal:20,marginTop:10}}
                        data={dataTopProduct}
                        renderItem={({item})=><ItemTopProduct product={item} nav={this.props.nav} />}
                        numColumns={2}
                    />

             </View>
             
         );
     }
 }