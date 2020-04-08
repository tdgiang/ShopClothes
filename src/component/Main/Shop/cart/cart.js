import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    FlatList
 } from 'react-native';
 import {connect} from 'react-redux';
import styles from '../../../../styles/styles';
import ItemCart from './itemCart';
import getAsynstorage from '../../../../api/asynstorage/getAsynstorage';
class Cart extends Component {

    getTotal(){
        let total=0;
        this.props.arrCart.map(e=>{
           total+=e.count*e.product.price ;
        })
       return total;
    }

     
     render() {
         const {btnTotal,txtBigWhite}=styles
         return (
             <View style={{flex:1,backgroundColor:'#e6e6e6'}}  >
                <View  style={{flex:1}} >
                    <FlatList
                        data={this.props.arrCart}
                        renderItem={({item})=><ItemCart item={item} navCart={this.props.navCart} />}

                    />
                     
                </View>
                <TouchableOpacity style={btnTotal} >
                    <Text style={txtBigWhite}>TOTAL {this.getTotal()}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
             </View>
             
         );
     }
 }
const mapStateToProps = (state) => {
    return {
        arrCart: state
    }
}

 export default connect(mapStateToProps)(Cart)