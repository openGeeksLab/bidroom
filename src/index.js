import React from 'react';
import {

} from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainScreen from './screen/MainScreen';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}

export default Root;
