import React, { Component } from 'react';
import { 
    View,
    Text,
    Image
 } from 'react-native';
import styles from '../../../../styles/styles';

const imgBanner=require('../../../../images/temp/banner.jpg');


export default class Collection extends Component {
     
     render() {
         const  {containerCollection,txtTitle,imgStyleBanner,boxBanner}=styles
         return (
             <View style={containerCollection}  >
                 
                    <Text style={txtTitle} >SPRING COLLECTION</Text>

                <View style={boxBanner}>
                    <Image style={imgStyleBanner} source={imgBanner}  />
                </View>
               
             </View>
             
         );
     }
 }