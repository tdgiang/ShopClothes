import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert
 } from 'react-native';
import styles from '../../../../../styles/styles';
 
import {connect} from 'react-redux';
import {addProduct} from '../../../../../api/redux/actionCreator';
const back =require('../../../../../images/appIcon/back.png');
const cart =require('../../../../../images/appIcon/cartSelect.png');
 
class Detail extends Component {


   
    selectParams(){
        if(this.props.route.params.productCart)
            return this.props.route.params.productCart.product;
        return this.props.route.params.product;
    }
 

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
            const product=this.selectParams();
            const {id,img,name,color,material,description,price}=product;
            
         return (
             <View style={{flex:1,backgroundColor:'#f2f2f2'}}  >
                 <View  style={containerDetail} >    
                    <View style={[rowBetween,{height:40}]} >
                        <TouchableOpacity  onPress={this.comeBack.bind(this)} >
                            <Image  source={back} style={imgIcon}  />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={async()=>{
                            let temp=false;
                            await this.props.arrCart.map(e=>{
                                if(e.product.id==id){
                                    temp=true;
                                }
                            });
                            if(temp==true)
                            { 
                                Alert.alert("Thông báo","Sản phẩm bạn chọn đã tồn tại trong giỏ hàng!")
                            }
                            else
                                this.props.addProduct(product)
                                
                            


                            
                        }}  >
                            <Image source={cart} style={imgIcon}  />
                        </TouchableOpacity>
                    </View>
                    <View style={rowBetween} >
                        <Image  source={img[0]} style={imgProducDetail} />
                        <Image source={img[1]}  style={imgProducDetail} />
                    </View>
                    <View style={[rowCenter,{marginVertical:10}]} >
                        <Text  style={txtBigBlack} >{name} </Text>
                        <Text style={txtNamePro}>/{price}$</Text>
                    </View>
                    <View style={{flex:1}} >
                        <Text>
                            {description}
                        </Text>
                    </View>
                    <View style={[rowBetween,{height:40}]} >
                    <Text style={txtRed} >Material {material}</Text>
                        <View  style={rowCenter} >
                            <Text style={txtRed} >Color {color}</Text>
                            <View style={iconColor}  />
                        </View>
                    </View>
                 </View>
             </View>
             
         );
     }
 }

 const mapStateToProps = (state) => {
     return {
         arrCart: state
     }
 }

 export default connect(mapStateToProps,{addProduct})(Detail);