import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
 } from 'react-native';
 import styles from '../../../../../styles/styles';
import Item from './item';
import dataCart from '../../../../../data/dataCart';
 const back=require('../../../../../images/appIcon/backList.png');
 
 export default class ListProduct extends Component {
      
     render() {
         const {rowBetween,imgIcon,txtRedBig}=styles;
         return (
             <View  style={{flex:1,margin:10,backgroundColor:'white',elevation:2,padding:10}} >
                <View style={[rowBetween,{height:40}]} >
                        <TouchableOpacity  onPress={()=>this.props.nav.pop()} >
                            <Image  source={back} style={imgIcon}  />
                        </TouchableOpacity>
                        <Text style={txtRedBig} >Party Dress</Text>
                        <View />
                </View>
               <FlatList
                    data={dataCart}
                    renderItem={({item})=><Item  item={item} nav={this.props.nav} />}
                    showsVerticalScrollIndicator={false}

                />
             </View>
             
         );
     }
 }