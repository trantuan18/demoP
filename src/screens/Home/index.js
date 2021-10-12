import React, { Component } from 'react';
import { Animated, View, Text, Pressable, } from 'react-native';
import styles from './styles';

const TIMING = 5000;



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      animatedWidth: new Animated.Value(0)
    };
  }

  OnPress = (value) => {
    this.props.ChangeValue(value)
  }

  OnPressDelay = (value) => {
    setTimeout(() => {
      this.props.ChangeValue(value)
    }, TIMING);
  }

  fadeIn = () => {
    Animated.timing(this.state.animatedWidth, {
      toValue: 120,
      duration: TIMING,
      easing: Easing.linear,
      useNativeDriver: false
    }).start(this.fadeOut())

  };
  fadeOut = () => {
    Animated.timing(this.state.animatedWidth, {
      toValue: 0,
      duration: 0,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()
  }

  render() {
    const transform = this.fadeAnimTransform;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text> App </Text>
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            onPress={() => this.OnPress(-1)}
          >
            <View style={styles.viewBtn}><Text>-</Text></View>
          </Pressable>
          <View style={styles.viewValue}><Text>{this.props.dataValue}</Text></View>
          <Pressable
            onPress={() => this.OnPress(1)}
          >
            <View style={styles.viewBtn}><Text>+</Text></View>
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            this.OnPressDelay(1)
            this.fadeIn()
            setTimeout(() => {
              this.fadeOut()
            }, TIMING);
          }}
          style={{ position: 'relative', }}
        >
          <View style={styles.viewBtnAnima}><Text>{"+<>"}</Text></View>
          <Animated.View
            style={{
              ...styles.viewBtnAnima, backgroundColor: 'red', position: 'absolute', top: 0, left: 0,
              zIndex: -1,
              width: this.state.animatedWidth
            }}></Animated.View>
        </Pressable>

        <Pressable
          onPress={() => this.props.navigation.navigate("Home1")}
        >
          <View style={styles.viewBtnAnima}><Text>{"Go to Home1"}</Text></View>
        </Pressable>
      </View>
    );
  }
}

import { connect } from 'react-redux';
import { ChangeValue } from '@service/redux/action';
import Easing from 'react-native/Libraries/Animated/Easing';

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeValue: (data) => {
      dispatch(ChangeValue(data))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dataValue: state.RCount
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)