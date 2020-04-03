import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity
 } from 'react-native';
import styles from '../../styles/styles';

const back=require('../../images/appIcon/back_white.png');
const logo=require('../../images/appIcon/ic_logo.png');
 export default class header extends Component {
      
     render() {
         const {rowBetween,txtBigWhite ,imgIcon}=styles
         return (
             <View style={[rowBetween,{alignItems:'center',marginHorizontal:10}]}  >
                 <TouchableOpacity>
                    <Image style={imgIcon} source={back} />
                </TouchableOpacity>
                <Text  style={txtBigWhite} >Wearing a Dress</Text>
                <TouchableOpacity>
                    <Image style={imgIcon} source={logo} />
                </TouchableOpacity>
             </View>
             
         );
     }
 }