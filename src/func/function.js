import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity
 } from 'react-native';

const imgBack=require('../images/appIcon/backs.png')
import styles from '../styles/styles';

const {txtBigWhite,headerChangeInfo,imgIcon}=styles;

export function renderHeader(title){
    return(
        <View style={headerChangeInfo} >
            <View />
            <Text style={txtBigWhite}>{title}</Text>
            <TouchableOpacity>
                <Image source={imgBack} style={imgIcon} />
            </TouchableOpacity>
        </View>
    )
}