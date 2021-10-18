import { TIMING } from '@src/config/value';
import { ChangeValue } from '@src/service/redux/action';
import React, { Component } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import Easing from 'react-native/Libraries/Animated/Easing';
import { connect } from 'react-redux';
import styles from './styles';
import ButtonReduxAnimated from '@src/components/buttonReduxAnimated';
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
          onPress={() => this.props.navigation.navigate("Home1")}
        >
          <View style={styles.viewBtnAnima}><Text>{"Go to Home1"}</Text></View>
        </Pressable>


        <ButtonReduxAnimated />
      </View>
    );
  }
}



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