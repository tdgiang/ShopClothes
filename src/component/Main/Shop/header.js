import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
 } from 'react-native';
import styles from '../../../styles/styles';
 const menu=require('../../../images/appIcon/ic_menu.png');
 const logo=require('../../../images/appIcon/ic_logo.png');
 export default class header extends Component {
     constructor(props){
         super(props);
         this.state={
             txtSearch:""
         }
     }
     
     render() {
         const {containerHeader,rowBetween,txtInputHeader,txtBigWhite,imgIcon}=styles;
        
         return (
             <View  style={containerHeader} >
                 <View style={rowBetween} >
                     <TouchableOpacity onPress={this.props.openMenu.bind(this)} >
                        <Image  style={imgIcon} source={menu}  />
                     </TouchableOpacity>
                    <Text style={txtBigWhite} >Wearing a Dress</Text>
                    <Image style={imgIcon} source={logo}  />
                 </View>
                 <View style={{height:5}} />
                <TextInput
                    style={txtInputHeader}
                    placeholder={"What do you want to buy?"}
                    onChangeText={(val)=>this.setState({txtSearch:val})}
                />
                 

             </View>
             
         );
     }
 }