import Expo from "expo";
import React from "react";
import { StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Ratings from "../views/ratings";

const SleepLabel = "Sleep Template";

const RatingsDrawerItem = StackNavigator({
  Ratings: {
    screen: Ratings
  }
});

RatingsDrawerItem.navigationOptions = {
  drawerLabel: SleepLabel,
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="star"
      size={25}
      iconStyle={{
        width: 20,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
      }}
      type="material"
      color={tintColor}
    />
  )
};

export default RatingsDrawerItem;
