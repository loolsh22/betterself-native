import React from "react";
import { TabNavigator } from "react-navigation";
import {
  LogLabel,
  RemindersLabel,
  SupplementsHistoryLabel
} from "../constants/labels";
import {
  HistoryCheckboxIcon,
  HomeIcon,
  LogCheckboxIcon,
  RemindersCheckboxIcon,
  SelectedTintColor
} from "../constants/icons";
import { SupplementsLogTab } from "../tabs/supplements/log";
import { SupplementsHistoryTab } from "../tabs/supplements/history";
import { SupplementsRemindersTab } from "../tabs/supplements/reminders";

const label = "Supplements & Medications";

export const SupplementsDrawer = TabNavigator(
  {
    [SupplementsLogTab.viewName]: {
      screen: SupplementsLogTab,
      path: "/supplementSelect",
      navigationOptions: {
        tabBarLabel: LogLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <LogCheckboxIcon tintColor={tintColor} />
        )
      }
    },
    [SupplementsHistoryTab.viewName]: {
      screen: SupplementsHistoryTab,
      path: "/supplementHistory",
      navigationOptions: {
        tabBarLabel: SupplementsHistoryLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <HistoryCheckboxIcon tintColor={tintColor} />
        )
      }
    },
    [SupplementsRemindersTab.viewName]: {
      screen: SupplementsRemindersTab,
      path: "/supplementReminders",
      navigationOptions: {
        tabBarLabel: RemindersLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <RemindersCheckboxIcon tintColor={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: SupplementsLogTab.viewName,
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: SelectedTintColor,
      // Android's default showing of icons is false whereas
      // iOS is true
      showIcon: true
    }
  }
);

SupplementsDrawer.navigationOptions = {
  drawerLabel: label,
  drawerIcon: ({ tintColor }) => <HomeIcon tintColor={tintColor} />
};
