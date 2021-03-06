import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity
 } from 'react-native';
import styles from '../../../../../styles/styles';

export default class ItemTopProduct extends Component {
     
     render() {
         const  {containerItem,imgStyleItemPro,txtNamePro,txtPrice,footerItem}=styles;
         const {name,price,img}=this.props.product;
        
  
         
         return (
             <TouchableOpacity  onPress={()=>this.props.nav.push("Detail",{product:this.props.product})} >
                <View style={containerItem}  >
                <Image  source={img[0]} style={imgStyleItemPro} />
                <View style={footerItem} >
                        <Text  style={txtNamePro} >{name}</Text>  
                        <Text  style={txtPrice} >{price}$</Text>
                        
                    </View>
                </View>
             </TouchableOpacity>
             
         );
     }
 }