import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';
import styles from '../../styles/styles';

 export default class itemOrder extends Component {
     
     render() {
         const {rowBetween,containerOrder,txtLeftOrder,txtOrderId}=styles;
         const {id,time,status,price}=this.props.order;
         return (
             <View style={containerOrder}>
                 <View  style={rowBetween} >
                     <Text style={txtLeftOrder}>Order id:</Text>
                     <Text style={txtOrderId}>{id}</Text>
                 </View>
                 <View style={rowBetween}>
                     <Text style={txtLeftOrder}>OrderTime:</Text>
                     <Text style={[txtOrderId,{color:'red'}]} >{time}</Text>
                 </View>
                 <View style={rowBetween}>
                     <Text style={txtLeftOrder}>Status:</Text>
                     <Text style={txtOrderId}>{status}</Text>
                 </View>
                 <View style={rowBetween} >
                     <Text style={txtLeftOrder}>Total:</Text>
                     <Text style={[txtOrderId,{color:'red',fontWeight:'bold'}]}  >{price}$</Text>
                 </View>              
             </View>

             
         );
     }
 }