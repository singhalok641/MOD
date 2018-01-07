import React from 'react';
import Modal from 'react-native-modalbox';
import {
  AppRegistry,
  Text,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TextInput
} from 'react-native';
import {Container, Card, CardItem} from 'native-base';


var screen = Dimensions.get('window');

export default class OrdersScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };

  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }


  render() {
    return (
      <Container>
      
      </Container>
    );
  }
}
