import React, { Component } from 'react';
import { 
    View,Text,ImageBackground,TouchableOpacity
 } from 'react-native';
import dataListCategory from '../../../../data/dataListCategory';
import Swiper from "react-native-web-swiper";

import styles from '../../../../styles/styles';

 export default class Slide extends Component {

    renderItem(){
        const {boxBanner,imgStyleBanner,txtNamePro}=styles
        let listItem=[];
        dataListCategory.map(e=>{
            listItem.push(
                
                    <View style={boxBanner}>
                    <TouchableOpacity>
                        <ImageBackground style={[imgStyleBanner,{justifyContent:'center',alignItems:'center'}]} source={e.img}>
                            <Text style={txtNamePro} >{e.name}</Text>
                        </ImageBackground>  
                    </TouchableOpacity>
                    </View>
               
            )
        })

        return listItem;
    }
     
     render() {
         return ( 
             <View  style={styles.containerSile} >
                <Swiper
                    
                    loop
                    timeout={2.5}
                    controlsProps={{
                    dotActiveStyle: { backgroundColor: 'red' },
                    
                    }}
                >
                    {this.renderItem()}
                </Swiper>
            </View>
             
         );
     }
 }