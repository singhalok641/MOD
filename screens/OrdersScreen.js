import React from 'react'
import {
  Container
} from 'native-base'

export default class OrdersScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props)
    this.state = {
      selected1: 'key0'
    }
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value
    })
  }


  render() {
    return (
      <Container />
    )
  }
}

