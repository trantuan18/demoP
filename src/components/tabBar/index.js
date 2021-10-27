import React, { Component } from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import styles from './styles';
import IconF from 'react-native-vector-icons/Feather';
import Home from "@src/screens/home";

var deviceWidth = Dimensions.get("window").width;

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    console.log("debugTabBar", this.props.state)
    return (
      <View style={styles.tabView}>
        <Pressable style={styles.btnTab}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <IconF name="home" size={28} />
          <Text>Home 1</Text>
        </Pressable>
        <Pressable style={styles.btnTab}
          onPress={() => this.props.navigation.navigate("Home1")}
        >
          <IconF name="home" size={28} />
          <Text>Home 2</Text>
        </Pressable>
      </View >
    );
  }
}


export default TabBar;
