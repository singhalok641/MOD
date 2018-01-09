import React from 'react';
import { Platform } from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    HOME: {
      screen: HomeScreen,
    },
    ORDERS: {
      screen: OrdersScreen,
    },
    CART: {
      screen: CartScreen,
    },
    PROFILE: {
      screen: ProfileScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'HOME':
            iconName = Platform.OS === 'ios'? `home${focused ? '' : '-outline'}`: 'home';
            break;
          case 'ORDERS':
            iconName = Platform.OS === 'ios' ? `bag${focused ? '' : '-outline'}` : 'bag';
            break;
          case 'CART':
            iconName = Platform.OS === 'ios' ? `basket${focused ? '' : '-outline'}` : 'basket';
            break;
          case 'PROFILE':
            iconName = Platform.OS === 'ios' ? `user${focused ? '' : '-outline'}` : 'user';
          
        }
        return (
          <SimpleLineIcons
            name={iconName}
            size={22}
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
