import React from 'react'
import {
  View,
  StyleSheet,
  WebView
} from 'react-native'
import {
  Container,
  Header,
  Content,
  Text } from 'native-base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0
  },
  mapscontainer: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    height: 220,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  maps: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  account: {
    color: '#555555',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 6
  },
  modalContentAddress: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  gridView: {
    paddingTop: 25,
    flex: 1
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff'
  },
  headerViewStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  HeaderShapeView: {
    paddingLeft: 10,
    justifyContent: 'center',
    borderRadius: 1
  }
})

export default class SingleProductScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props)
    this.state = {
      selected1: 'key0'
    }
  }

  render() {
    return (
          <WebView
            source={{ uri: 'http://159.89.168.254/' }}
            style={{ marginTop: 0 }}
          />
    )
  }
}
