import React, { Component } from 'react';
import { 
    View,
    Text,
    ScrollView
 } from 'react-native';
import Collection from './collection';
import ListCategory from './listCategory/listCategogy';
import TopProduct from './topProduct/topProduct';
export default class Home extends Component {
     
     render() {
         return (
                <ScrollView>
                    <View style={{flex:1,backgroundColor:'#d9d9d9'}}  > 
                        <Collection />
                        <ListCategory nav={this.props.nav} />
                        <TopProduct nav={this.props.nav} />
                    </View>
                </ScrollView>
            
             
         );
     }
 }