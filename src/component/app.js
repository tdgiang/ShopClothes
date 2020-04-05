import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Main from './Main/main';
import store from '../api/redux/store';
export default class app extends Component {
  
  render() {
    return (
      <Provider store={store}>
          <Main />
      </Provider>
      
    );
  }
}