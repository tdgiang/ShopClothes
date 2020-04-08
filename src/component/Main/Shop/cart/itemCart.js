import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
    Animated
 } from 'react-native';

import styles from '../../../../styles/styles';
import {connect} from 'react-redux';


import {removeProduct,decreaseProduct,augmentProduct} from '../../../../api/redux/actionCreator';

class ItemCart extends Component {

    constructor(props){
        super(props);
        this.state={
            animOpacity:new Animated.Value(1)
        }
    }

    _removeProduct=async(id)=>{
         Alert.alert(
            "Thông báo",
            "Bạn muốn xóa sản phẩm khỏi giỏ hàng?",
            [
              { 
                  text: "OK",
                  onPress: () =>{
                    Animated.timing(
                        this.state.animOpacity,
                        {
                            toValue:0,
                            duration:500,
                            useNativeDriver:true
                        }
                    ).start(async()=>{      
                     this.props.removeProduct(id); 
                    })

                  }
                  },
              {
                  text: "Cancel",
                  style: "cancel"
                },
            ],
            { cancelable: true }
          );
 
    }



     render() {
        const {itemCart,containerCount,txtNamePro,txtRed,boxImgList,rightCart,rowBetween,txtCout} =styles;
        const {name,price, img}=this.props.item.product;
        const {count,id}=this.props.item;
        const opacity=this.state.animOpacity;
        
        return (
            <Animated.View style={[itemCart,{opacity,transform:[{scale:opacity}]}]} >
                    <View  style={boxImgList} >
                       <Image 
                           style={{width:100,height:120}}
                            source={img[0]} 
                       />
                   </View>
                    <View  style={rightCart} >
                        <View  style={rowBetween} >
                            <Text style={txtNamePro} >{name}</Text>
                            <TouchableOpacity onPress={this._removeProduct.bind(this,id)}  >
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
                                <TouchableOpacity onPress={()=>{
                                    if(count==1)
                                    {
                                        console.log("Ban muon xoa sp");
                                        this._removeProduct(id);
                                    }
                                    else
                                    {
                                        this.props.decreaseProduct(id);

                                    }
                                } } >
                                    <Text  style={txtCout}>-</Text>
                                </TouchableOpacity>  
                            </View>
                            <TouchableOpacity onPress={()=>this.props.navCart.push("Detail",{productCart:this.props.item})} >
                               <Text style={txtRed} >Show Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </Animated.View>
        );
     }
 }

 const mapStateToProps = (state) => {
     return {
         arrCart: state
     }
 }

 export default connect(mapStateToProps,{removeProduct,decreaseProduct,augmentProduct})(ItemCart);

