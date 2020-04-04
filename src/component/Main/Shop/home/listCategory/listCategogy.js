import React, { Component } from 'react';
import { 
    View,
    Text,
    
 } from 'react-native';
import styles from '../../../../../styles/styles';
import Slide from './slide';



export default class ListCategory extends Component {
     
     render() {
         const  {containerCollection,txtTitle,imgStyleBanner,boxBanner}=styles
         return (
             <View style={containerCollection}  >
                 
                    <Text style={txtTitle} >list of category</Text>

                <View style={boxBanner}>
                   <Slide nav={this.props.nav} />
                    
                </View>
               
             </View>
             
         );
     }
 }