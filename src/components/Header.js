import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { height } from 'react-native-dimension';

class Header extends Component<{}> {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.backView}>
          <TouchableOpacity onPress={()=> console.log('back')}>
            <Icon 
              name="keyboard-arrow-left" 
              size={35} color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleView}>
          <Text
            style={{ fontWeight: '600', color: 'white' }}
          >BID ROOM</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    height: height(15),
    flexDirection: 'row',
    backgroundColor: '#18475e'
  },
  backView: {
    backgroundColor: '#18475e', 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  titleView: {
    flex: 5, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});


export default Header;
