import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity
 } from 'react-native';
import styles from '../../styles/styles';

 export default class Menu extends Component {
      
     render() {
         const { btnMenu,txtMenu }=styles;
         return (
             <View>
                 <TouchableOpacity 
                    style={btnMenu} 
                    onPress={()=>this.props.navigation.navigate("Shop") } 
                > 
                     <Text  style={txtMenu} >Shop</Text>
                 </TouchableOpacity>
                 <TouchableOpacity 
                    style={btnMenu} 
                    onPress={()=>this.props.navigation.navigate("OrderHistory") } 
                > 
                     <Text  style={txtMenu} >Order History</Text>
                 </TouchableOpacity>
                 <TouchableOpacity  
                    style={btnMenu}
                    onPress={()=>this.props.navigation.navigate("ChangeInfo") }
                 >
                     <Text style={txtMenu} >Change Info</Text>
                 </TouchableOpacity>
             </View>
             
         );
     }
 }