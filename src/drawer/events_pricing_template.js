import Expo from "expo";
import React from "react";
import { StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Pricing from "../views/pricing";

const EventsLabel = "Events Template";

const PricingDrawerItem = StackNavigator({
  Pricing: {
    screen: Pricing,
    navigationOptions: ({ navigation }) => ({
      title: EventsLabel,
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate("DrawerOpen")}
        />
      )
    })
  }
});

PricingDrawerItem.navigationOptions = {
  drawerLabel: EventsLabel,
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="attach-money"
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

export default PricingDrawerItem;
