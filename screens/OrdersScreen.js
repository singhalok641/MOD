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

  constructor(props) {
    super(props);
    this.state = {
      selected1: "key0"
    };
  }

  

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }

  renderPage(image, index) {
    //console.log(image);
        return (
            <View key={index}>
              <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode:'contain' }} source={image} />
            </View>
        );
    }

  render() {
    return (
      <Container>
      
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop:10,
  },
  headerViewStyle:{
    flex:1, 
    flexDirection: 'row',
  },
  HeaderShapeView:{
    width: 282,
    height: 47, 
    borderWidth: 0,
    borderColor: '#a8a8a8',
    paddingLeft: 10,
    paddingTop: 2,
    marginLeft: 0,
    marginTop: 0,
    borderRadius: 1
  },
  view: {
    flex:1,
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'  
  }
});
