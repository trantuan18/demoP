import { ifIphoneX, getBottomSpace } from "@src/service/helper/CheckIphoneX";
import { Dimensions } from "react-native";

var deviceWidth = Dimensions.get("window").width;
var deviceWidth = Dimensions.get("window").width;

export default {
  tabView: {
    borderTopWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#fff',
    width: deviceWidth,
    height: 60,
    ...ifIphoneX({
      height: getBottomSpace() + 75,
      paddingBottom: getBottomSpace() + 10
    }, {
      height: 75,
      paddingBottom: 10
    }),
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  footerTab: {
    flex: 1,
    paddingBottom: 10,
    width: deviceWidth,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 55,
    backgroundColor: 0,
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
  },
  btnTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
  viewGioHang: { backgroundColor: 'red', width: 22, height: 22, borderRadius: 11, position: 'absolute', top: -8, right: -6.5, justifyContent: 'center', }

}