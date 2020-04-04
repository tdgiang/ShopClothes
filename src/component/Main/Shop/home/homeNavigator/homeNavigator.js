import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './stack';
export default class HomeNavigator extends Component {
    render() {
        return (
            <NavigationContainer independent={true} >
                <MyStack />
            </NavigationContainer>
            
        );
    }
}