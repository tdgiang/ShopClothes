import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './stack';
export default class DetailNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
            
        );
    }
}