import React from 'react';
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

const image = require('../assets/images/whis.jpg');

export default class CartScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key0',
      devices: {},
      result: '',
    }
  }

  componentDidMount = async () => {
    fetch(`http://192.168.0.105:8082/stores/list-token-device`,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Host': '192.168.0.102:8082'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          devices: responseJson,
        }, function() {
          console.log(this.state.devices[1].tokenDevice);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  sendNotification = async () => {
    fetch('http://192.168.0.105:8082/stores/push-notification', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tokenDevice: this.state.devices[1].tokenDevice,
          message: 'Order Request #1',
          data: 'order details',
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          result: responseJson
        }, function() {
          if(this.state.result.status === 'ok'){
            console.log('notified');
          }
          else{
            console.log("Error");
            //alert('Wrong storeID/password');
          }
        });
      });
  }

  render() {
    return (
      <Container>  
      	<Header style={{  backgroundColor:'#fff' }}>
          <View style={ styles.headerViewStyle }>
            <View style={{ marginTop:0 ,marginLeft:0, marginRight:0 , flexDirection: 'row', alignItems: 'center'  }}>
              <View style = {styles.HeaderShapeView}>
                <Text style = {{paddingTop: 0 ,fontSize:20, color: '#555555', fontWeight: 'bold' }}>Cart</Text>
                <Text style={{ color:'#03a9f4', fontSize:12, fontWeight: 'normal', paddingLeft: 0, paddingBottom: 0, }} >2 items, To Pay: ₹460</Text>
              </View>
            </View>
          </View>
        </Header>

        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View>
            	<Text style={{fontSize:13,color :'#03a9f4'}}>Items requiring prescriptions (1)</Text>
            	<List>
            		<ListItem>
                
                  <View style={styles.view}>
                    <Image resizeMode = 'contain' style={styles.image} source={image} />
                    <View style={ styles.info }>
                      <View style={{ justifyContent:'flex-start',paddingTop: 6, paddingLeft :23 }}>
                        <Text style={styles.pro_name}>VWash Plus Intimate Hygiene Wash</Text>

                      </View>
                      <Text note style={styles.descrip}>bottle of 200ml liquid</Text>
                           
                    </View>
                    <View>
                      <Text style={{flex:1, fontSize : 13, paddingTop: 8,paddingLeft:10,marginRight :8}}>₹ 300</Text>
                    </View>
                  </View>
                
                </ListItem>
					    </List>
            </View>
            <View>
            	<Text style={{fontSize:13,color :'#03a9f4'}}>Items not requiring prescriptions (1)</Text>
            	<List>
            	</List>
            </View>  
          </ScrollView>
        </View>
        <Button 
          large
          containerViewStyle={{width: '100%',marginLeft :0}}
          buttonStyle={{ alignItems:'center', justifyContent:'center' }}
          backgroundColor={'#03a9f4'} 
          title='CONFIRM YOUR ORDER' 
          onPress={this.sendNotification}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
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
    justifyContent : 'center',
    borderRadius: 1,

  },
  control:{
    height:10,
    width:10,
    alignItems : 'center',
    justifyContent : 'space-between',
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
	  fontSize :13
	},
  descrip:{
	  fontSize :12,
    paddingTop:3
	},
  info:{
    flex:1,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
  }
});
