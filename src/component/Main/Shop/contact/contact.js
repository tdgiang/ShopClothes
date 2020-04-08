import React, { Component } from 'react';
import { 
    View,
    Text,
    Image
 } from 'react-native';
import styles from '../../../../styles/styles';
import MapView from 'react-native-maps';
 const imgMap=require('../../../../images/appIcon/map.png');
 const iconLocation=require('../../../../images/appIcon/location.png');
 const iconPhone=require('../../../../images/appIcon/phone.png');
 const iconmail=require('../../../../images/appIcon/mail.png');
 const iconMessage=require('../../../../images/appIcon/message.png');
 export default class Contact extends Component {
     
     render() {
         const {imgStyleMap,containerMap,conatinerContact,line,imgIcon,rowContact,txtRed}=styles
         return (
             <View style={{flex:1,backgroundColor:'#e6e6e6',padding:10}}  >
                 
                <MapView
                style={containerMap}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                 />
                

                <View  style={conatinerContact} >
                    <View  style={rowContact}  >
                        <Image  style={imgIcon}  source={iconLocation} />
                        <Text style={txtRed} >123 Trâu Quỳ Gia lâm</Text>
                    </View>
                    <View  style={line}  />
                    <View  style={rowContact}  >
                        <Image  style={imgIcon}  source={iconPhone} />
                        <Text style={txtRed} >0866912436</Text>
                    </View>
                    <View  style={line} />
                    <View  style={rowContact}  >
                        <Image  style={imgIcon} source={iconmail}  />
                        <Text style={txtRed} >tdgiangdev@gmail.com</Text>
                    </View>
                    <View  style={line} />
                    <View  style={rowContact}  >
                        <Image  style={imgIcon}  source={iconMessage} />
                        <Text style={txtRed} >fb/ducgiang</Text>
                    </View>
                </View>
             </View>
             
         );
     }
 }
 