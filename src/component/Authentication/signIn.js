import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity
 } from 'react-native';
import styles from '../../styles/styles';

 export default class SignIn extends Component {
     constructor(props){
         super(props);
         this.state={
             email:"",
             passWord:""
         }
     }
      
     render() {
         const {containerSignIn,txtInputSign,txtBtn,btnSign}=styles;
         return (
             <View  style={containerSignIn} >
                <TextInput 
                    style={txtInputSign}
                    placeholder={"Enter your email"} 
                    onChangeText={(val)=>this.setState({email:val})}  
                />
                
                <TextInput
                    style={txtInputSign}  
                    placeholder={"Enter your email"} 
                    onChangeText={(val)=>this.setState({passWord:val})}  
                />
                <TouchableOpacity style={btnSign} >
                    <Text style={txtBtn} >Sign in now</Text>
                </TouchableOpacity>
             </View>
             
         );
     }
 }