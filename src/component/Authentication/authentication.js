import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';
import Header from './header';
import SignIn from './signIn';
import Footer from './footer';
import SignUp from './signUp';
 export default class Authentication extends Component {
     
    constructor(props){
        super(props);
        this.state={
            signIn:false
        }
    }

    renderSign(){
        if(this.state.signIn)
            return <SignIn />
        return <SignUp />
    }

    selectSignIn(){
        this.setState({
            signIn:true
        })
    }
    selectSignUp(){
        this.setState({
            signIn:false
        })
    }
     
     render() {
         return (
             <View style={{flex:1,backgroundColor:'#00cc88'}}  >
                 <View style={{height:50}} >
                    <Header />
                 </View>
                 {this.renderSign()}
                <Footer signIn={this.state.signIn} 
                    selectSignUp={this.selectSignUp.bind(this)} 
                    selectSignIn={this.selectSignIn.bind(this)}  
                />
             </View>
             
         );
     }
 }