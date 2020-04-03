import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity
 } from 'react-native';
import styles from '../../styles/styles';

 export default class SignUp extends Component {
     constructor(props){
         super(props);
         this.state={
             name:"",
             email:"",
             passWord:"",
             resPassWord:"",
         }
     }
      
     render() {
         const {containerSignIn,txtInputSign,txtBtn,btnSign}=styles;
         return (
             <View  style={containerSignIn} >
                <TextInput 
                    style={txtInputSign}
                    placeholder={"Enter your name"} 
                    onChangeText={(val)=>this.setState({email:val})}  
                />
                
                <TextInput
                    style={txtInputSign}  
                    placeholder={"Enter your email"} 
                    onChangeText={(val)=>this.setState({passWord:val})}  
                />
                <TextInput 
                    style={txtInputSign}
                    placeholder={"Enter your Password"} 
                    onChangeText={(val)=>this.setState({email:val})}  
                />
                
                <TextInput
                    style={txtInputSign}  
                    placeholder={"Re-enter your Password"} 
                    onChangeText={(val)=>this.setState({passWord:val})}  
                />
                <TouchableOpacity style={btnSign} >
                    <Text style={txtBtn} >Sign UP NOW</Text>
                </TouchableOpacity>
             </View>
             
         );
     }
 }