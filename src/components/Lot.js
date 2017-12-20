import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { width, height } from 'react-native-dimension';
import { connect } from 'react-redux';


class Lot extends Component<{}> {
  render() {
    console.warn(this.props.bid.bidReducer.raice);
    const iPhonesource = 'https://cdn.images.express.co.uk/img/dynamic/59/590x/secondary/Android-might-be-more-popular-but-iPhones-have-a-number-of-superior-features-629628.jpg';
    const requireimg = require('../images/Texture_1.png');
    return (
     <View style={styles.mainView}>

        <View style={styles.imgView}>
          <Image
            style={{ flex: 1 }}
            source={requireimg}
            resizeMode={'cover'}
          />
        </View>
        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Image
            style={styles.iphoneImg}
            source={{ uri: iPhonesource }}
          />
        </View>
        <View style={{ flex: 1 }} />
          <View style={styles.textView}>
            <Text
              style={styles.appleText}
            >Apple iPad Pro</Text>
            <View style={styles.valueView}>
              <Text
                style={styles.text}
              >Value:</Text>
              <Text
                style={[styles.text, { color: '#75676b', fontWeight: '600' }]}
              > {this.props.bid.bidReducer.raice + '$'}</Text>
            </View>
            <Text
              style={styles.text}
            >50 per bid</Text>
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    height: height(20)
  },
  imgView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width(100),
    height: height(100),
  },
  iphoneImg: {
    height: height(15), 
    width: width(40), 
    marginBottom: 15, 
    borderRadius: 6
  },
  textView: {
    flex: 8, 
    justifyContent: 'center'
  },
  appleText: {
    color: 'white', 
    backgroundColor: 'transparent', 
    fontWeight: '900', 
    fontSize: 18
  },
  valueView: { 
    flexDirection: 'row', 
    paddingTop: 7, 
    paddingBottom: 7 
  },
  text: {
    color: '#6b8595', 
    backgroundColor: 'transparent'
  }
});

const mapStateToProps = state => {
  return {
    bid: state
  };
};

const connectScreen = connect(
  mapStateToProps,
)(Lot);


export default connectScreen;
