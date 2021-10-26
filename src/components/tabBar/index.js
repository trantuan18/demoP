import React, { Component } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import styles from './styles';
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
      </View >
    );
  }
}


export default TabBar;
