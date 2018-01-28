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
const image = require('../assets/images/whis.jpg');

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
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
              <View>
                <List>
                <ListItem>
                
                  <View style={styles.view}>
                    <Image resizeMode = 'contain' style={styles.image} source={image} />
                    <View style={ styles.info }>
                      <View style={{ justifyContent:'flex-start',paddingTop: 3 }}>
                        <Text style={styles.pro_name}>Whisper Ultra Nights Wings Sanitary Pads Pack of 2</Text>
                      </View>
                      <Text note style={styles.descrip}>packet of 5 pads</Text>
                      <View style={{justifyContent : 'center',alignItems : 'center',flexDirection : 'row',paddingLeft:5,paddingTop:5}}>
                        <Text style={{ flex:1,fontSize : 14,color:'#4d4d4d',alignSelf : 'flex-end',paddingBottom:2}}>₹ 300</Text>
                        <View style={styles.button}>
                          <Text style={{fontSize :14,color: '#ffffff',fontWeight : 'bold'}}>ADD TO CART</Text>
                        </View>
                      </View>
                    </View>
                    
                  </View>
                
                </ListItem>
                </List>
              </View>
            </ScrollView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop:5,
  },
  headerViewStyle:{
    flex:1, 
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  view: {
    flexDirection:'row',
    justifyContent : 'space-between'
  },
  image:{
    width: 75, 
    height: 75 
  },
  pro_name:{
    fontSize :13,
    paddingLeft:5
  },
  descrip:{
    fontSize :12,
    paddingTop:3,
    alignSelf : 'stretch',
    paddingLeft:5
  },
  info:{
    flex:1,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
  },
  button:{
    justifyContent : 'center',
    alignItems : 'center',
    height:23,
    width:110,
    backgroundColor : '#03a9f4',
    borderRadius:10
  }
});
