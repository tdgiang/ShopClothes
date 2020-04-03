import React, { Component } from 'react';
import { 
    View,
    TextInput,
    TouchableOpacity,
    Text
 } from 'react-native';
import styles from '../../styles/styles';

 export default class BodyChangInfo extends Component {
     constructor(props){
         super(props);
         this.state={
             name:'Tran Duc Giang',
             adress:'123 Trau Quy Gia Lam',
             sdt:'0866912436'
         }
     }
     
     render() {
         const {txtInputSign,btnIfo,txtWhite}=styles;
         const {name,adress,sdt}=this.state;
         return (
             <View style={{flex:1,justifyContent:'center',paddingHorizontal:20}} >
                <TextInput
                    style={[txtInputSign,{borderWidth:2,borderColor:'#00997a'}]}
                    placeholder={"Enter your name"} 
                    value={name} 
                    onChangeText={(val)=>this.setState({name:val})} 
                />
                <TextInput
                    style={[txtInputSign,{borderWidth:2,borderColor:'#00997a'}]}
                    placeholder={"Enter your name"} 
                    value={adress} 
                    onChangeText={(val)=>this.setState({adress:val})} 
                />
                <TextInput
                    style={[txtInputSign,{borderWidth:2,borderColor:'#00997a'}]}
                    placeholder={"Enter your name"} 
                    value={sdt} 
                    onChangeText={(val)=>this.setState({sdt:val})} 
                />

                <TouchableOpacity  style={btnIfo} >
                    <Text style={txtWhite}>CHANGE YOUR INFORMATION</Text>
                </TouchableOpacity>
                    
             </View>
             
         );
     }
 }