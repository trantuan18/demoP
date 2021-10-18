import { TIMING } from '@src/config/value';
import { ChangeValue } from '@src/service/redux/action';
import React, { useEffect, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import Easing from 'react-native/Libraries/Animated/Easing';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';


const ButtonReduxAnimated = ({ ChangeValue }) => {
  const [isStartAnimated, setIsStartAnimated] = useState(false)
  const animatedWidth = new Animated.Value(0)

  const OnPressDelay = (value) => {
    setIsStartAnimated(true)
    setTimeout(() => {
      ChangeValue(value)
      setIsStartAnimated(false)
    }, TIMING);
  }

  useEffect(() => {
    isStartAnimated ? fadeIn() : fadeOut()
  }, [isStartAnimated])


  const fadeIn = () => {
    Animated.timing(animatedWidth, {
      toValue: 120,
      duration: TIMING,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()
  };

  const fadeOut = () => {
    Animated.timing(animatedWidth, {
      toValue: 0,
      duration: 0,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()
  }

  return (
    <Pressable
      onPress={() => {
        OnPressDelay(1)
      }}
      style={{ position: 'relative', }}
    >
      <View style={styles.viewBtnAnima}><Text>{"+<>"}</Text></View>
      <Animated.View
        style={{
          ...styles.viewBtnAnima, backgroundColor: 'red', position: 'absolute', top: 0, left: 0,
          zIndex: -1,
          width: animatedWidth
        }}></Animated.View>
    </Pressable>
  )
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ChangeValue }, dispatch);
};

export default connect(null, mapDispatchToProps)(ButtonReduxAnimated);
