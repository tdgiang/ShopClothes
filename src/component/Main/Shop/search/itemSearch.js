import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native';
import styles from '../../../../styles/styles';


 export default class ItemSearch extends Component {
     
     render() {
        const {itemCart,containerCount,txtNamePro,txtRed,boxImgList,rightCart,rowBetween,txtCout,iconColor} =styles;
        const {name,price,count, img,color,material}=this.props.item;
        return (
            <View style={itemCart} >
                    <View  style={boxImgList} >
                       <Image 
                           style={{width:100,height:120}}
                           source={img[0]}   
                       />
                   </View>
                    <View  style={rightCart} >
                        <Text style={txtNamePro} >{name}</Text>
                        <Text style={txtRed} >{price} $</Text>
                        <Text>Material {material} </Text>
                        <View  style={rowBetween} >
                                <Text  >Color {color}</Text> 
                                <View  style={iconColor} />
                                <TouchableOpacity onPress={()=>this.props.navSearch.push("Detail",{product:this.props.item})} >
                                    <Text style={txtRed} >Show Details</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
            </View>
        );
     }
 }