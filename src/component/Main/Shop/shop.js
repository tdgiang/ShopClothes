import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {connect} from 'react-redux';
import MyTabs from './myTab';
import Header from './header';
import getAsynstorage from '../../../api/asynstorage/getAsynstorage';
import {setData} from '../../../api/redux/actionCreator';
class Shop extends Component {

    openMenu(){
        this.props.navigation.openDrawer()
    }
    
    setData=async ()=>{
       const data=await getAsynstorage();
       this.props.setData(data);
    }

    UNSAFE_componentWillMount(){
        this.setData();
    }

     render() {
         return (
            <NavigationContainer  independent={true} >
                <Header openMenu={this.openMenu.bind(this)} />
                <MyTabs />
          </NavigationContainer>
             
         );
     }
 }
 export default connect(null,{setData})(Shop);
