import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Pricing from '../views/pricing';

const PricingDrawerItem = StackNavigator({
  Pricing: {
    screen: Pricing,
    navigationOptions: ({ navigation }) => ({
      title: 'Pricing',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
});

PricingDrawerItem.navigationOptions = {
  drawerLabel: 'Pricing',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="attach-money"
      size={25}
      style={{
        width: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default PricingDrawerItem;
