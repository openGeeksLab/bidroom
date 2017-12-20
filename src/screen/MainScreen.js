import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';



import Header from '../components/Header';
import Lot from '../components/Lot';
import Bid from '../components/Bid';

class MainScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.View}>
        <Header  />
        <Lot />
        <Bid />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  View: {
    // paddingTop: Platform.OS === 'ios' ? 20 : 0,
  }
});



export default MainScreen;
