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
import Modal from 'react-native-modalbox';

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

        <Modal style={ styles.modal } position={"top"} ref={"offers"} backButtonClose={true} coverScreen={true} animationDuration={300} backdropPressToClose={false} swipeToClose={false}>
          <Header style={{  backgroundColor:'#fff' }}>
            <View style={ styles.headerViewStyle }>
              <View style={{  flexDirection: 'row', alignItems: 'center'  }}>
                <Icon
                  iconStyle={{ alignSelf:'center', marginLeft:10 }}
                  size={23}
                  name='arrow-back'
                  type='materialicons'
                  color='#555555'
                  onPress={() => this.refs.offers.close()}
                />
                <Text style = {{paddingTop: 0 ,fontSize:17, fontWeight : 'bold',color: '#555555',paddingLeft:7 }}>OFFERS</Text>
              </View>
            </View>
          </Header>
          <View style={styles.container}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
              <Text note style={{fontSize : 13}}>AVAILABLE COUPONS</Text>
              <Text style={{fontSize : 15,color:'#03a9f4',alignSelf : 'center',paddingTop:10}}>No coupons available</Text>
            </ScrollView>
          </View>
        </Modal>

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
            contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View>
            	<Text style={{fontSize:13,color :'#03a9f4',paddingLeft:10}}>Items requiring prescriptions (1)</Text>
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
                        <View style={{flexDirection : 'row',alignItems : 'center'}}>
                        <View style={styles.button}>
                          <Text style={{fontSize : 17,fontWeight : 'bold'}}> - </Text>  
                        </View>
                        <Text style={{fontSize : 15,fontWeight : 'bold',color : '#4d4d4d'}}>  1  </Text>
                        <View style={styles.buttons}>
                          <Text style={{fontSize : 17,color : '#03a9f4',fontWeight : 'bold'}}> + </Text>
                        </View>
                      </View>
                      </View>
                    </View>
                    
                  </View>
                
                </ListItem>

					    </List>
            </View>
            <View style={{paddingTop:10}}>
            	<Text style={{fontSize:13,color :'#03a9f4',paddingLeft:10}}>Items not requiring prescriptions (1)</Text>
            	<List>
                
            	</List>
            </View>

            <View style={styles.pricing}>
              <View style={{marginLeft:10,marginRight:10,justifyContent : 'space-between'}}>
                <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
                  <Text style={styles.price_text}>MRP Total</Text>
                  <Text style={styles.price_text}>₹ 600</Text>
                </View>
                <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
                  <Text style={styles.price_text}>Discount</Text>
                  <Text style={styles.price_text}>NA</Text>
                </View>
              </View>
              <View
                style={{
                paddingTop:4,
                borderBottomColor: '#cccccc',
                borderBottomWidth: 1,
                }}
              />
              <View style={{marginLeft:10,marginRight:10}}>
                <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
                  <Text style={styles.price_text}>Coupon Discount</Text>
                  <Text onPress={() => this.refs.offers.open()} style={styles.coupon}>APPLY</Text>
                </View>
                <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
                  <Text style={styles.price_text}>Delivery Charges</Text>
                  <Text style={styles.price_text}>₹ 10</Text>
                </View>
              </View>
              <View
                style={{
                paddingTop:4,
                borderBottomColor: '#cccccc',
                borderBottomWidth: 1,
                }}
              />
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
          
        />
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
    paddingTop:10,
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
    height:21,
    width:21,
    borderWidth:1,
    borderRadius : 21,
    borderColor : '#555555',
    alignItems : 'center',
    justifyContent : 'center',
    alignContent : 'center'
  },
  price_text:{
    fontSize:13,
    color:'#555555',
    paddingTop:4,
    paddingBottom:4
  },
  total:{
    fontSize:16,
    color:'#4d4d4d',
    fontWeight : 'bold',
    paddingTop:8,
    marginBottom:13,

  },
  coupon:{
    fontSize:13,
    fontWeight : 'bold',
    color:'#03a9f4',
    paddingTop:4,
    fontWeight : 'bold',
    paddingBottom:4
  },
  buttons:{
    height:21,
    width:21,
    borderWidth:1,
    borderRadius : 21,
    borderColor : '#03a9f4',
    alignItems : 'center',
    justifyContent : 'center',
    alignContent : 'center'
  },
  pricing:{
    paddingLeft:13,
    paddingRight:13,
    paddingTop: 13
  },
  modal: {
    justifyContent: 'flex-start',
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
  }
});
