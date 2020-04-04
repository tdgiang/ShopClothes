import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity
 } from 'react-native';
import styles from '../../../../../styles/styles';


const back =require('../../../../../images/appIcon/back.png');
const cart =require('../../../../../images/appIcon/cartSelect.png');
const imgProduct01=require('../../../../../images/products/54.jpeg');
const imgProduct02=require('../../../../../images/products/55.jpeg');
export default class Detail extends Component {

    comeBack(){
        if(this.props.nav)
            this.props.nav.pop();
        else if(this.props.navSearch)
            this.props.navSearch.pop();
        else if(this.props.navCart)
            this.props.navCart.pop();
    }
      
     render() {
         const {containerDetail,rowBetween,
            imgIcon,imgProducDetail,rowCenter,txtBigBlack,
            txtNamePro,txtRed,iconColor} =styles;
         return (
             <View style={{flex:1,backgroundColor:'#f2f2f2'}}  >
                 <View  style={containerDetail} >    
                    <View style={[rowBetween,{height:40}]} >
                        <TouchableOpacity  onPress={this.comeBack.bind(this)} >
                            <Image  source={back} style={imgIcon}  />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={cart} style={imgIcon}  />
                        </TouchableOpacity>
                    </View>
                    <View style={rowBetween} >
                        <Image source={imgProduct01} style={imgProducDetail} />
                        <Image source={imgProduct02}  style={imgProducDetail} />
                    </View>
                    <View style={[rowCenter,{marginVertical:10}]} >
                        <Text  style={txtBigBlack} >BLACK OF THE </Text>
                        <Text style={txtNamePro}>/124$</Text>
                    </View>
                    <View style={{flex:1}} >
                        <Text>
                            Mô tả sản phẩm
                        </Text>
                    </View>
                    <View style={[rowBetween,{height:40}]} >
                        <Text style={txtRed} >Material leather</Text>
                        <View  style={rowCenter} >
                            <Text style={txtRed} >Color khaki</Text>
                            <View style={iconColor}  />
                        </View>
                    </View>
                 </View>
             </View>
             
         );
     }
 }