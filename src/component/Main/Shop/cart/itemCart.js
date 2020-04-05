import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native';
import styles from '../../../../styles/styles';
import {connect} from 'react-redux';
 import {removeProduct,decreaseProduct,augmentProduct} from '../../../../api/redux/actionCreator';
class ItemCart extends Component {
     
     render() {
        const {itemCart,containerCount,txtNamePro,txtRed,boxImgList,rightCart,rowBetween,txtCout} =styles;
        const {name,price, img}=this.props.item.product;
        const {count,id}=this.props.item;
        return (
            <View style={itemCart} >
                    <View  style={boxImgList} >
                       <Image 
                           style={{width:100,height:120}}
                            source={img[0]} 
                       />
                   </View>
                    <View  style={rightCart} >
                        <View  style={rowBetween} >
                            <Text style={txtNamePro} >{name}</Text>
                            <TouchableOpacity onPress={()=>this.props.removeProduct(id)}  >
                                <Text style={{fontSize:16,color:'gray'}} >X</Text>
                            </TouchableOpacity>
                        </View>
                       
                        <Text style={txtRed} >{price} $</Text>
                        <View  style={rowBetween} >
                            <View style={containerCount} >
                                <TouchableOpacity  onPress={()=>this.props.augmentProduct(id)} >
                                    <Text  style={txtCout} >+</Text>
                                </TouchableOpacity>
                                <Text style={txtCout} >{count}</Text>
                                <TouchableOpacity onPress={()=>this.props.decreaseProduct(id)} >
                                    <Text  style={txtCout}>-</Text>
                                </TouchableOpacity>  
                            </View>
                            <TouchableOpacity onPress={()=>this.props.navCart.push("Detail",{productCart:this.props.item})} >
                               <Text style={txtRed} >Show Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        );
     }
 }

 export default connect(null,{removeProduct,decreaseProduct,augmentProduct})(ItemCart);

