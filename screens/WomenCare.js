import React from 'react';
import Modal from 'react-native-modalbox';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import { 
  Container, 
  Header, 
  Item, 
  Input, 
  Text, 
  List, 
  ListItem, 
  Content, 
  Left, 
  Right,
  Card,
  CardItem } from 'native-base';
import { Button, Icon } from 'react-native-elements';

var screen = Dimensions.get('window');
const image = require('../assets/images/banners/prescribed.jpeg');

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


  render() {
    return (
      <Container >
      	<Header style={{  backgroundColor:'#fff' }}>
          <View style={ styles.headerViewStyle }>
            <View style={{  flexDirection: 'row', alignItems: 'center'  }}>
            	<Icon
            	 iconStyle={{ alignSelf:'center', marginLeft:10 }}
  				 size={25}
  				 name='arrow-back'
  				 type='materialicons'
  				 color='#555555'
  				/>
                <Text style = {{paddingTop: 0 ,fontSize:20, color: '#555555', fontWeight: 'bold',paddingLeft:7 }}>Women's Care</Text>
            </View>
          </View>
        </Header>

        <View style={styles.container}>
        	
        </View>
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
    alignItems : 'center',
    justifyContent : 'space-between'
  },
});
