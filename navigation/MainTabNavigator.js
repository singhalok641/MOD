import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Orders: {
      screen: OrdersScreen,
    },
    Cart: {
      screen: CartScreen,
    },
    Profile: {
      screen: ProfileScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'? `home${focused ? '' : '-outline'}`: 'home';
            break;
          case 'Orders':
            iconName = Platform.OS === 'ios' ? `medical-bag${focused ? '' : '-outline'}` : 'medical-bag';
            break;
          case 'Cart':
            iconName = Platform.OS === 'ios' ? `cart${focused ? '' : '-outline'}` : 'cart';
            break;
          case 'Profile':
            iconName = Platform.OS === 'ios' ? `account${focused ? '' : '-outline'}` : 'account';
        }
        return (
          <MaterialCommunityIcons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
