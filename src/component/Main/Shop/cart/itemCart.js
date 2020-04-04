import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native';
import styles from '../../../../styles/styles';


 export default class ItemCart extends Component {
     
     render() {
        const {itemCart,containerCount,txtNamePro,txtRed,boxImgList,rightCart,rowBetween,txtCout} =styles;
        const {name,price,count, img}=this.props.item;
        return (
            <View style={itemCart} >
                    <View  style={boxImgList} >
                       <Image 
                           style={{width:100,height:120}}
                           source={img}   
                       />
                   </View>
                    <View  style={rightCart} >
                        <View  style={rowBetween} >
                            <Text style={txtNamePro} >{name}</Text>
                            <TouchableOpacity>
                                <Text style={{fontSize:16,color:'gray'}} >X</Text>
                            </TouchableOpacity>
                        </View>
                       
                        <Text style={txtRed} >{price} $</Text>
                        <View  style={rowBetween} >
                            <View style={containerCount} >
                                <TouchableOpacity>
                                    <Text  style={txtCout} >+</Text>
                                </TouchableOpacity>
                                <Text style={txtCout} >{count}</Text>
                                <TouchableOpacity>
                                    <Text  style={txtCout}>-</Text>
                                </TouchableOpacity>
                               
                                
                               
                            </View>
                            <TouchableOpacity onPress={()=>this.props.navCart.push("Detail")} >
                               <Text style={txtRed} >Show Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        );
     }
 }