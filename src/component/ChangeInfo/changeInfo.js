import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';
import styles from '../../styles/styles';
 import {renderHeader} from '../../func/function';
 import BodyChangInfo from './bodyChangInfo';
 export default class changeInfo extends Component {
     
     render() {
         const {headerChangeInfo}=styles 
         return (
             <View style={{flex:1}}  >
                {renderHeader('User Infomation',this.props.navigation)}
                <BodyChangInfo />
             </View>
             
         );
     }
 }