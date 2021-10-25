import { Button, FooterTab } from "native-base";
import React, { Component } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import BuildHelper from "../../helper/BuildHelper";
import styles from "./styles";

var deviceWidth = Dimensions.get("window").width;

class FooterTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  ChonServerTest() {
    if (BuildHelper.isBuildStore()) {
      return;
    }
    this.props.navigation.navigate("ChonServerTest")
  }

  render() {
    let SoLuong = Number(this.props.SoLuong?.Order) + Number(this.props.SoLuong?.CoSan) + Number(this.props.SoLuong?.Export);
    return (
      <View style={styles.tabView}>
        <FooterTab style={styles.footerTab} >
          <Button
            style={styles.btnTab}
            delayPressIn={0}
            onPressIn={() => this.props.navigation.navigate("Home")}>
            {this.props.state.index != 0 &&
              <Image
                style={styles.image}
                source={require('')} />
            }
            {this.props.state.index === 0 &&
              <Image
                style={styles.image}
                source={require(' ')} />
            }
          </Button>

          <Button
            style={styles.btnTab}
            delayPressIn={0}
            onPressIn={() => this.props.navigation.navigate("CategoryHome")}>
            {this.props.state.index != 1 &&
              <Image
                style={styles.image}
                source={require(' ')} />
            }
            {this.props.state.index == 1 &&
              <Image
                style={styles.image}
                source={require('')} />
            }
          </Button>

          <Button
            style={styles.btnTab}
            delayPressIn={0}
            onPressIn={() => this.props.navigation.navigate("CartNhanBaoGia")}>
            <View style={{ backgroundColor: '#0099ff', padding: 10, borderRadius: 14.5, }}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                source={require('')} />
            </View>
          </Button>

          <Button
            style={styles.btnTab}
            delayPressIn={0}
            onPressIn={() => this.props.navigation.navigate("TaiKhoan")}
            onLongPress={() => this.ChonServerTest()}
          >
            {this.props.state.index != 2 &&
              <Image
                style={styles.image}
                source={require('')} />
            }
            {this.props.state.index == 2 &&
              <Image
                style={styles.image}
                source={require('')} />
            }
          </Button>

          <Button
            style={styles.btnTab}
            delayPressIn={0}
            onPressIn={() => this.props.navigation.navigate("Cart")}>
            {this.props.state.index != 3 &&
              <View style={{}}>
                <Image
                  style={styles.image}
                  source={require('')} />
                {SoLuong > 0 &&
                  <View style={styles.viewGioHang}>
                    {SoLuong <= 99 ?
                      <Text style={{ fontSize: 12, color: '#fff', textAlign: 'center' }}>{SoLuong}</Text> :
                      <Text style={{ fontSize: 10, color: '#fff', textAlign: 'center' }}>99+</Text>
                    }
                  </View>}
              </View>
            }

            {this.props.state.index == 3 &&
              <View style={{}}>
                <Image
                  style={styles.image}
                  source={require('')} />
                {SoLuong > 0 &&
                  <View style={styles.viewGioHang}>
                    {SoLuong <= 99 ?
                      <Text style={{ fontSize: 12, color: '#fff', textAlign: 'center' }}>{SoLuong}</Text> :
                      <Text style={{ fontSize: 10, color: '#fff', textAlign: 'center' }}>99+</Text>
                    }
                  </View>}
              </View>
            }
          </Button>
        </FooterTab>
      </View >
    );
  }
}


export default TabBar;
