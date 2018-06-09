import React from 'react'
import { Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Colors from '../constants/Colors'
import HomeScreen from '../screens/HomeScreen'
import OrdersScreen from '../screens/OrdersScreen'
import CartScreen from '../screens/CartScreen'
import ProfileScreen from '../screens/ProfileScreen'

export default TabNavigator(
  {
    HOME: {
      screen: HomeScreen
    },
    ORDERS: {
      screen: OrdersScreen
    },
    CART: {
      screen: CartScreen
    },
    PROFILE: {
      screen: ProfileScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
        case 'HOME':
          iconName = Platform.OS === 'ios' ? `home${focused ? '' : '-outline'}` : 'home'
          break
        case 'ORDERS':
          iconName = Platform.OS === 'ios' ? `pill${focused ? '' : '-outline'}` : 'pill'
          break
        case 'CART':
          iconName = Platform.OS === 'ios' ? `cart${focused ? '' : '-outline'}` : 'cart'
          break
        case 'PROFILE':
          iconName = Platform.OS === 'ios' ? `account${focused ? '' : '-outline'}` : 'account'
        }
        return (
          <MaterialCommunityIcons
            name={iconName}
            size={31}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    lazy: false
  }
)
