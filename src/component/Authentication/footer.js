import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity
 } from 'react-native';
import styles from '../../styles/styles';


 export default class Footer extends Component {

  
      
     render() {
         const {footerAuthen,btnLeft ,btnRight}=styles;
         const colorSignIn=this.props.signIn?'#00997a':'#a6a6a6';
         const colorSignUp=this.props.signIn?'#a6a6a6':'#00997a';
         return (
             <View  style={footerAuthen } >
                 <TouchableOpacity style={btnLeft} onPress={()=>this.props.selectSignIn()} >
                    <Text style={{fontWeight:'bold',fontSize:18,color:colorSignIn}}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={{width:5}} />
                <TouchableOpacity  style={btnRight} onPress={()=>this.props.selectSignUp()} >
                    <Text style={{fontWeight:'bold',fontSize:18,color:colorSignUp}} >SIGN UP</Text>
                </TouchableOpacity>
             </View>
             
         );
     }
 }