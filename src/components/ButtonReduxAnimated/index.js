import React, { useEffect, useState, } from 'react';
import { Pressable, Text, View, Animated } from 'react-native';

import { TIMING } from '@Config/value';
import styles from './styles';
import Easing from 'react-native/Libraries/Animated/Easing';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeValue } from '@src/Service/Redux/action';


const dispatch = useDispatch()

const ButtonReduxAnimated = ({ }) => {
  const counter = useSelector();
  const dispatch = useDispatch()

  const [animatedWidth, setanimatedWidth] = useState(new Animated.Value(0));
  useEffect(() => {

  });

  const OnPressDelay = (value) => {
    setTimeout(() => {
      dispatch(ChangeValue(value))
    }, TIMING);
  }

  const fadeIn = () => {
    Animated.timing(animatedWidth, {
      toValue: 120,
      duration: TIMING,
      easing: Easing.linear,
      useNativeDriver: false
    }).start(this.fadeOut())
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
        // fadeIn()
        // setTimeout(() => {
        //   fadeOut()
        // }, TIMING);
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

export default ButtonReduxAnimated;
