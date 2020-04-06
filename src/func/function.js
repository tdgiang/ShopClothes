import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert
 } from 'react-native';

const imgBack=require('../images/appIcon/backs.png')
import styles from '../styles/styles';

const {txtBigWhite,headerChangeInfo,imgIcon}=styles;

export function renderHeader(title,navigation){
    return(
        <View style={headerChangeInfo} >
            <View />
            <Text style={txtBigWhite}>{title}</Text>
            <TouchableOpacity  
                onPress={()=>navigation.openDrawer() }
            >
                <Image source={imgBack} style={imgIcon} />
            </TouchableOpacity>
        </View>
    )
}
