import React, { Component } from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import styles from './styles';
import IconF from "react-native-vector-icons/Feather";
import Home from "src/screens/home";

var deviceWidth = Dimensions.get("window").width;

const lstTabBar = [
  {
    iconName: "bell",
    label: "Notify",
    navigateTo: 'NavigationScreen'
  },
  {
    iconName: "box",
    label: "Box",
    navigateTo: 'Home1'
  },
  {
    iconName: "home",
    label: "Home",
    navigateTo: 'Home'
  },
]
class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    console.log("debugTabBar", this.props.state)
    let indexTab = this.props.state.index
    return (
      <View style={styles.tabView}>
        {lstTabBar.map((item, index) => (
          <Pressable
            key={index}
            style={styles.btnTab}
            onPress={() => this.props.navigation.navigate(item.navigateTo)}
          >
            <IconF name={item.iconName} size={28} color={index == indexTab ? "red" : "gray"} />
            <Text style={{ color: index == indexTab ? "red" : "gray" }}>{item.label}</Text>
          </Pressable>
        ))}
      </View >
    );
  }
}


export default TabBar;
