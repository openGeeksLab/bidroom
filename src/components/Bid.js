import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity, 
  Alert
} from 'react-native';

import { width, height } from 'react-native-dimension';
import { connect } from 'react-redux';

import { raice } from '../redux/actions/bidAction';

class Bid extends Component<{}> {
  constructor(props) { 
    super(props);
    this.state = {
      timer: null,
      counter: 0,
      secondsElapsed: 15,
      addToTime: 1,
      balance: 600
    };
  }
  getInitialState = () => {
    return { secondsElapsed: 0 };
  };
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
    this.props.raice(850);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick = () => {
    this.setState({ secondsElapsed: this.state.secondsElapsed - this.state.addToTime });
  };
  refreshTime = () => {
    this.setState({ secondsElapsed: 30 });
  }
  // stopTime = () => {
    
  // }

  timeOut = () => {
    if(this.state.secondsElapsed === 0) {
      Alert.alert('You win!')
    }
  }

  // bottomPress = () => {
  //   this.props.refreshTime();
  //   this.props.dispatch(raice(this.props.bid.bidReducer.raice));
  // }


  render() {
  // console.warn(this.props.bid.bidReducer.raice);
  this.timeOut();
  const requireimg = require('../images/Texture_main.png');
    return (
      <View style={{ height: height(65), backgroundColor: '#204255', width: width(100) }}>
        <View style={styles.imgView}>
          <Image
            style={{ flex: 1 }}
            source={requireimg}
            resizeMode='contain'
          />
        </View>
        <View style={{ flexDirection: 'row', paddingLeft: width(4), paddingTop: height(5) }}>
          <Text
            style={{ color: '#a3b2b8', fontSize: 17, fontWeight: '300' }}
          >Remaining balance: </Text>
          <Text
            style={{ color: '#d49e8e', fontWeight: '700', fontSize: 17 }}
          >{this.state.balance}</Text>
          <Text
            style={{ color: 'white', fontSize: 17, fontWeight: '700' }}
          > Bids</Text>
        </View>
        <View style={{ alignItems: 'center', backgroundColor: 'transparent', paddingTop: height(5) }}>
          <Text style={{ fontSize: 40, color: '#326986' }}>{
            this.state.secondsElapsed < 10 && this.state.secondsElapsed >= 0 ? '00:' + '0' + this.state.secondsElapsed :
            this.state.secondsElapsed >= 0 ? '00:' + this.state.secondsElapsed : '00:00'
          }</Text>
        </View>
        
        <View style={{ alignItems: 'center', paddingTop: height(5) }}>
          <TouchableOpacity
            onPress={()=> {
              if (this.state.balance>=50) {
                this.props.bottomPress(this.props.bid.bidReducer.raice);
                this.setState({
                  balance: this.state.balance - 50,
                  secondsElapsed: 30
                });
              }else{
                Alert.alert('Not enough for bid.');
              }
            }}
          >
            <Image 
              source={require('../images/Button.png')}
              style={{ height: width(50), width: width(50) }}
            />
          </TouchableOpacity>
          <Text
            style={{ backgroundColor: 'transparent', color: '#45839d', fontSize: 18, paddingTop: height(2) }}
          >You just made a bid</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // right: 0,
    // bottom: 0,
    // top: 0,
    // left: 0,
    width: width(100),
    height: height(100),
  },
});

const mapDispatchToProps = dispatch => {
  return {
    bottomPress: (val) => {
      dispatch(raice(val));
    },
    raice: (val) => {
      dispatch(raice(val));
    }
  };
};
const mapStateToProps = state => {
  return {
    bid: state
  };
};

const connectScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bid);

export default connectScreen;
