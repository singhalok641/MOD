import { Notifications } from 'expo'
import React from 'react'
import { StackNavigator } from 'react-navigation'
import MainTabNavigator from './MainTabNavigator'
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync'
import PrescribedScreen from '../screens/ProductsScreen/PrescribedScreen'
import EverydayScreen from '../screens/ProductsScreen/EverydayScreen'
import PersonalScreen from '../screens/ProductsScreen/PersonalScreen'
import DiabetesScreen from '../screens/ProductsScreen/DiabetesScreen'
import NaturalScreen from '../screens/ProductsScreen/NaturalScreen'
import BabyScreen from '../screens/ProductsScreen/BabyScreen'
import WomenCareScreen from '../screens/EverydayProducts/WomenCare'

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    PrescribedScreen: {
      screen: PrescribedScreen
    },
    EverydayScreen: {
      screen: EverydayScreen
    },
    PersonalScreen: {
      screen: PersonalScreen
    },
    DiabetesScreen: {
      screen: DiabetesScreen
    },
    NaturalScreen: {
      screen: NaturalScreen
    },
    BabyScreen: {
      screen: BabyScreen
    },
    WomenCareScreen: {
      screen: WomenCareScreen
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    })
  }
)

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove()
  }

  render() {
    return <RootStackNavigator />
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync()

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification)
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`)
  };
}
