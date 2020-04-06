/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import App from './src/component/app';
import AuthenNavigator from './src/component/Authentication/authenticationNavigator/authenNavigator';
AppRegistry.registerComponent(appName, () => App);
