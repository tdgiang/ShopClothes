import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    FlatList
 } from 'react-native';
import styles from '../../../../../styles/styles';
import ItemTopProduct from './itemTopProduct';
import dataProduct from '../../../../../data/dataProduct';

export default class TopProduct extends Component {
     
     render() {
         const  {containerTopProfuct,txtTitle}=styles
         return (
             <View style={containerTopProfuct}  >
                    <Text style={txtTitle} >Top Product</Text>
                    <FlatList
                        style={{paddingHorizontal:20,marginTop:10}}
                        data={dataProduct}
                        renderItem={({item})=><ItemTopProduct product={item} nav={this.props.nav} />}
                        numColumns={2}
                    />

             </View>
             
         );
     }
 }