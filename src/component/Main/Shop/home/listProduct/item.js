import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity
 } from 'react-native';
import styles from '../../../../../styles/styles';


 export default class Item extends Component {
     
     render() {
         const {itemListProduct,txtNamePro,txtRed,iconColor,boxImgList,rightCart} =styles;
         const {name,price,material,color,img}=this.props.item;
         return (
             <View style={itemListProduct} >
                 
                     <View  style={boxImgList} >
                        <Image 
                            style={{width:100,height:120}}
                            source={img}
                            
                        />
                    </View>
                     <View  style={rightCart} >
                         <Text style={txtNamePro} >{name}</Text>
                         <Text style={txtRed} >{price} $</Text>
                         <Text>Maternal {material}</Text>
                         <View  style={{flexDirection:'row',alignItems:'center'}} >
                             <Text  >Color {color}</Text>
                             <View style={iconColor} />
                             <TouchableOpacity onPress={()=>this.props.nav.push("Detail")} >
                                <Text style={txtRed} >Show Details</Text>
                             </TouchableOpacity>
                         </View>
                     </View>
               
                

             </View>
         );
     }
 }