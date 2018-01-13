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
                <Text style={{ color:'#03a9f4', fontSize:12, fontWeight: 'normal', paddingLeft: 0, paddingBottom: 0, }} >2 items, To Pay: ₹610</Text>
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
                      <View style={{ justifyContent:'flex-start',paddingTop: 6, paddingLeft :15 }}>
                        <Text style={styles.pro_name}>VWash Plus Intimate Hygiene Wash</Text>

                      </View>
                      <Text note style={styles.descrip}>bottle of 200ml liquid</Text>
                           
                    </View>
                    <View>
                      <Text style={{flex:1, fontSize : 14, paddingTop: 8,paddingLeft:10,marginRight :8,color:'#4d4d4d'}}>₹ 300</Text>
                      <View style={{flexDirection : 'row',alignItems : 'center'}}>
                        <View style={styles.button}>
                          <Text style={{fontSize : 15}}> - </Text>  
                        </View>
                        <Text style={{fontSize : 15,fontWeight : 'bold',color : '#4d4d4d'}}>  1  </Text>
                        <View style={styles.buttons}>
                          <Text style={{fontSize : 15,color : '#03a9f4'}}> + </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                
                </ListItem>

					    </List>
            </View>
            <View style={{paddingTop:5}}>
            	<Text style={{fontSize:13,color :'#03a9f4'}}>Items not requiring prescriptions (1)</Text>
            	<List>
                <ListItem>
                
                  <View style={styles.view}>
                    <Image resizeMode = 'contain' style={styles.image} source={image} />
                    <View style={ styles.info }>
                      <View style={{ justifyContent:'flex-start',paddingTop: 6, paddingLeft :15 }}>
                        <Text style={styles.pro_name}>VWash Plus Intimate Hygiene Wash</Text>

                      </View>
                      <Text note style={styles.descrip}>bottle of 200ml liquid</Text>
                           
                    </View>
                    <View>
                      <Text style={{flex:1, fontSize : 14, paddingTop: 8,paddingLeft:10,marginRight :8,color:'#4d4d4d'}}>₹ 300</Text>
                      <View style={{flexDirection : 'row',alignItems : 'center'}}>
                        <View style={styles.button}>
                          <Text style={{fontSize : 15}}> - </Text>  
                        </View>
                        <Text style={{fontSize : 15,fontWeight : 'bold',color : '#4d4d4d'}}>  1  </Text>
                        <View style={styles.buttons}>
                          <Text style={{fontSize : 15,color : '#03a9f4'}}> + </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                
                </ListItem>
            	</List>
            </View>

            <View style={styles.pricing}>
              <Text style={{color:'#cccccc',alignSelf : 'center'}}>───────────────────────────</Text>
              <View style={{marginLeft:10,marginRight:10}}>
                <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
                  <Text style={styles.price_text}>MRP Total</Text>
                  <Text style={styles.price_text}>₹ 600</Text>
                </View>
                <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
                  <Text style={styles.price_text}>Discount</Text>
                  <Text style={styles.price_text}>NA</Text>
                </View>
              </View>
              <Text style={{color:'#cccccc',alignSelf : 'center'}}>───────────────────────────</Text>
              <View style={{marginLeft:10,marginRight:10}}>
                <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
                  <Text style={styles.price_text}>Coupon Discount</Text>
                  <Text style={styles.coupon}>APPLY</Text>
                </View>
                <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
                  <Text style={styles.price_text}>Delivery Charges</Text>
                  <Text style={styles.price_text}>₹ 10</Text>
                </View>
              </View>
              <Text style={{color:'#cccccc',alignSelf : 'center'}}>───────────────────────────</Text>
              <View style={{marginLeft:10,marginRight:10}}>
                <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
                  <Text style={styles.price_text}></Text>
                  <Text style={styles.total}>To Pay: ₹ 610</Text>
                </View>
              </View>
            </View> 

          </ScrollView>

        </View>
        <Button 
          large
          containerViewStyle={{ width: '100%',marginLeft :0 }}
          buttonStyle={{ alignItems:'center', justifyContent:'center' }}
          backgroundColor={'#03a9f4'} 
          title={`CONFIRM YOUR ORDER`}
          fontWeight={'bold'}
          fontSize = {17} 
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
    paddingTop:8,
  },
  headerViewStyle:{
    flex:1, 
    flexDirection: 'row',
  },
  
  HeaderShapeView:{
    paddingLeft: 10,
    justifyContent : 'center',
    borderRadius: 1,

  },
  button:{
    height:22,
    width:22,
    borderWidth:1,
    borderRadius : 20,
    borderColor : '#555555',
    alignItems : 'center',
    justifyContent : 'center',
    alignContent : 'center'
  },
  price_text:{
    fontSize:13,
    color:'#555555',
    paddingTop:3
  },
  total:{
    fontSize:16,
    color:'#4d4d4d',
    fontWeight : 'bold',
    paddingTop:1,
    marginBottom:13
  },
  coupon:{
    fontSize:13,
    fontWeight : 'bold',
    color:'#03a9f4',
    paddingTop:3,
    fontWeight : 'bold'
  },
  buttons:{
    height:22,
    width:22,
    borderWidth:1,
    borderRadius : 20,
    borderColor : '#03a9f4',
    alignItems : 'center',
    justifyContent : 'center',
    alignContent : 'center'
  },
  pricing:{
    paddingTop: 5
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
