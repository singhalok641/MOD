import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native'
import {
  Container,
  Header,
  Text,
  List,
  ListItem,
  Form,
  Label,
  Item,
  Input
} from 'native-base'
import { Button, Icon } from 'react-native-elements'
import Modal from 'react-native-modal'
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 10
  },
  headerViewStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  HeaderShapeView: {
    paddingLeft: 10,
    justifyContent: 'center',
    borderRadius: 1
  },
  button: {
    height: 23,
    width: 23,
    borderWidth: 1,
    borderRadius: 21,
    borderColor: '#555555',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  price_text: {
    fontSize: 15,
    color: '#555555',
    paddingTop: 4,
    paddingBottom: 4
  },
  total: {
    fontSize: 16,
    color: '#4d4d4d',
    fontWeight: 'bold',
    paddingTop: 8,
    marginBottom: 13
  },
  coupon: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#03a9f4',
    paddingTop: 4,
    paddingBottom: 4
  },
  buttons: {
    height: 23,
    width: 23,
    borderWidth: 1,
    borderRadius: 21,
    borderColor: '#03a9f4',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  pricing: {
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 13,
    paddingBottom: 10
  },
  modal: {
    justifyContent: 'flex-start'
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: 95,
    height: 95
  },
  pro_name: {
    fontSize: 16,
    paddingLeft: 5
  },
  descrip: {
    fontSize: 14,
    paddingTop: 3,
    alignSelf: 'stretch',
    paddingLeft: 5
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  offersTextStyle: {
    paddingTop: 0,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#555555',
    paddingLeft: 7
  },
  bottomModalOffers: {
    justifyContent: 'flex-end',
    margin: 0
  },
  bottomModalAddress: {
    justifyContent: 'flex-end',
    margin: 0
  },
  modalOffers: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  modalAddress: {
    flex: 0.4,
    flexDirection: 'column',
    backgroundColor: 'white',
    aspectRatio: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  account: {
    color: '#555555',
    fontSize: 17,
    fontWeight: 'bold'
  },
  emptyCart: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  empty: {
    flex: 1,
    width: null,
    height: null
  },
  addressContainer: {
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
  addressHead: {
    color: '#555555',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 6
  },
  modalContentAddress: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    paddingLeft: 0,
    paddingRight: 0
  }
})

export default class CartScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      selected1: 'key0',
      devices: {},
      result: '',
      response: {},
      products: {},
      totalPrice: null,
      totalQty: null
    }
  }

  componentDidMount = async () => {
    /* fetch(`http://192.168.42.85:8082/stores/list-token-device`, {
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
          devices: responseJson
        }, function () {
          console.log(this.state.devices[1].tokenDevice)
        })
      })
      .catch((error) => {
        console.error(error)
      })*/

    fetch(`http://159.89.168.254:8082/stores/users/getCart`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Host': '192.168.56.1:8082'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          response: responseJson,
          products: responseJson.products,
          totalPrice: responseJson.totalPrice,
          totalQty: responseJson.totalQty
        }, function () {
          console.log(responseJson)
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  decreaseByOne(productId) {
    fetch(`http://159.89.168.254:8082/stores/users/reduceByOne/${productId}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Host': '192.168.56.1:8082'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ }, function () {
          console.log(responseJson)
          if (responseJson.success === true) {
            console.log('decreased quantity by one')
            this.componentDidMount()
          }
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  increaseByOne(productId) {
    fetch(`http://159.89.168.254:8082/stores/users/increaseByOne/${productId}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Host': '192.168.56.1:8082'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ }, function () {
          console.log(responseJson)
          if (responseJson.success === true) {
            console.log('increased quantity by one')
            this.componentDidMount()
          }
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  sendNotification = async () => {
    fetch('http://159.89.168.254:8082/stores/push-notification', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tokenDevice: this.state.devices[1].tokenDevice,
        message: 'Order Request #1',
        data: 'order details'
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          result: responseJson
        }, function () {
          console.log(this.state.result)
          if (this.state.result.status === 'ok') {
            console.log('notified')
          } else {
            console.log('Error')
            // alert('Wrong storeID/password');
          }
        })
      })
  }

  _renderOffers = () => (
    <View style={ styles.modalOffers }>
      <Header style={{ backgroundColor: '#fff' }}>
        <View style={ styles.headerViewStyle }>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              iconStyle={{ alignSelf: 'center', marginLeft: 10 }}
              size={23}
              name='arrow-back'
              type='materialicons'
              color='#555555'
              onPress={() => this.setState({ visibleModal: null, textLength: '', isExists: false, passLength: '' })}
            />
            <Text style = {{ paddingTop: 0, fontSize: 17, fontWeight: 'bold', color: '#555555', paddingLeft: 7 }}>OFFERS</Text>
          </View>
        </View>
      </Header>
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <Text note style={{ fontSize: 13 }}>AVAILABLE COUPONS</Text>
          <Text style={{ fontSize: 15, color: '#03a9f4', alignSelf: 'center', paddingTop: 10 }}>No coupons available</Text>
        </ScrollView>
      </View>
    </View>
  )

  _renderAddress = () => (
    <View style={ styles.modalAddress }>
      <View style={{ paddingTop: 10, paddingLeft: 15, paddingRight: 15, paddingBottom: 10, backgroundColor: '#e5f6fd' }}>
        <Text style={ styles.account }>Choose a delivery address</Text>
      </View>
      <ScrollView style={{ flex: 1, flexDirection: 'column', paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
        <View style={{ flex: 1, flexDirection: 'column', paddingTop: 10, paddingLeft: 5, paddingRight: 5, paddingBottom: 0 }}>
            <List>
              <ListItem>
                <View style={{ alignItems: 'stretch', flexDirection: 'row' }}>
                  <Icon
                    name='location-on'
                    type='material'
                    color='#0A9EFC'
                    size={22}
                  />
                  <View style={{ paddingLeft: 15 }}>
                    <Text style={{ alignSelf: 'stretch', fontSize: 16, color: '#0A9EFC', fontWeight: 'bold' }}>Other</Text>
                    <Text style={{ fontSize: 14, color: '#697689' }}>221-B, Baker Street, Indirapuram, GZB</Text>
                  </View>
                </View>
              </ListItem>
              <ListItem>
                <View style={{ alignItems: 'stretch', flexDirection: 'row' }}>
                  <Icon
                    name='home'
                    type='foundation'
                    color='#0A9EFC'
                    size={22}
                  />
                  <View style={{ paddingLeft: 15 }}>
                    <Text style={{ alignSelf: 'stretch', fontSize: 16, color: '#0A9EFC', fontWeight: 'bold' }}>Home</Text>
                    <Text style={{ fontSize: 14, color: '#697689' }}>697-A, Nyay Khand 1st, Indirapuram, GZB</Text>
                  </View>
                </View>
              </ListItem>
            </List>
          </View>
      </ScrollView>
      <TouchableHighlight onPress={() => this.setState({ visibleModal: 3 })} underlayColor='#dbdbdb' >
        <View style={{ alignItems: 'center', flexDirection: 'row', paddingBottom: 15, paddingLeft: 15 }}>
          <Icon
            name='plus'
            type='entypo'
            color='#0A9EFC'
            size={24}
          />
          <View style={{ paddingLeft: 15 }}>
            <Text style={{ fontSize: 16, color: '#0A9EFC', fontWeight: 'bold' }}>ADD NEW ADDRESS</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  )

  _renderAddAddress = () => (
    <View style={ styles.modalContentAddress}>
      <View style={styles.mapscontainer}>
        <MapView
          style={styles.maps}
          initialRegion={this.state.region}
          zoomEnabled={true}
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
          pitchEnabled={true}
          showsBuildings={true}
          showsCompass={true}
          showsUserLocation={true}
        />
        <View pointerEvents='none' style={{ alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <Image pointerEvents='none' style={{ height: 45, width: 45, marginBottom: 40 }} source={marker}/>
        </View>
      </View>
      <ScrollView style={{ flex: 1, flexDirection: 'column', paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 5 }}>
        <View style={ styles.addressContainer }>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingLeft: 15, paddingRight: 15, paddingBottom: 10, backgroundColor: '#e5f6fd' }}>
            <Icon
              style={{ marginLeft: 17, paddingRight: 6 }}
              name='arrow-back'
              type='MaterialIcons'
              color='#555555'
              size={20}
            />
            <Text style={ styles.addressHead }>Set Delivery Location</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column', paddingTop: 0, paddingLeft: 4, paddingRight: 4, paddingBottom: 0 }}>
            <KeyboardAvoidingView
              style={ styles.modalContentAddress }
              behavior='padding'>
              <Form>
                <Item stackedLabel style={{ paddingTop: 10 }}>
                  <Label style={{ fontSize: 12, color: '#909090' }}>LOCATION</Label>
                  <Text numberOfLines={1} style={{ paddingTop: 6 }}>
                    {this.state.address}
                  </Text>
                </Item>
                <Item stackedLabel style={{ paddingTop: 10 }}>
                  <Label style={{ fontSize: 12, color: '#909090' }}>HOUSE/FLAT NO.</Label>
                  <Input
                    keyboardType = 'default'
                    returnKeyType='next'
                  />
                </Item>
                <Item stackedLabel style={{ paddingTop: 10 }}>
                  <Label style={{ fontSize: 12, color: '#909090' }}>LANDMARK</Label>
                  <Input
                    keyboardType = 'default'
                    returnKeyType='next'
                  />
                </Item>
              </Form>
            </KeyboardAvoidingView>
            <View style={{ paddingLeft: 15, paddingTop: 10 }}>
              <Label style={{ paddingBottom: 10, paddingTop: 5, fontSize: 12, color: '#909090' }}>SAVE AS</Label>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                  <Icon
                    name='home'
                    type='foundation'
                    color='#808080'
                    size={19}
                  />
                  <Text style={{ paddingLeft: 5, fontSize: 16, color: '#909090' }}>Home</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                  <Icon
                    name='work'
                    type='material'
                    color='#808080'
                    size={19}
                  />
                  <Text style={{ paddingLeft: 5, fontSize: 16, color: '#909090' }}>Work</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                  <Icon
                    name='location-on'
                    type='material'
                    color='#808080'
                    size={19}
                  />
                  <Text style={{ paddingLeft: 5, fontSize: 16, color: '#909090' }}>Other</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Button
        large
        containerViewStyle={{ width: '100%', marginLeft: 0 }}
        buttonStyle={{ alignItems: 'center', justifyContent: 'center' }}
        backgroundColor={'#03a9f4'}
        title={`ADD ADDRESS`}
        fontWeight={'bold'}
        fontSize = {17}
      />
    </View>
  )

  render() {
    //this.componentDidMount()
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    if (this.state.products === null || this.state.totalQty === 0) {
      return (
        <Container>
          <View style={styles.emptyCart}>
            <Image
              resizeMode='contain'
              source={require('../assets/images/emptycart.png')}
              style={styles.empty}
            />
          </View>
        </Container>
      )
    }
    return (
      <Container>
        <Modal
          isVisible={ this.state.visibleModal === 1 }
          style={ styles.bottomModalOffers }
          backdropOpacity={0.5}
          onBackButtonPress={() => this.setState({ visibleModal: null, textLength: '', isExists: false, passLength: '' })}
          onBackdropPress={() => this.setState({ visibleModal: null, textLength: '', isExists: false, passLength: '' })}
          animationOut={ 'slideOutRight' }>
          {this._renderOffers()}
        </Modal>

        <Modal
          isVisible={ this.state.visibleModal === 2 }
          style={ styles.bottomModalAddress }
          backdropOpacity={0.5}
          onBackButtonPress={() => this.setState({ visibleModal: null, textLength: '', isExists: false, passLength: '' })}
          onBackdropPress={() => this.setState({ visibleModal: null, textLength: '', isExists: false, passLength: '' })}
          animationOut={ 'slideOutRight' }>
          {this._renderAddress()}
        </Modal>

        <Modal
          isVisible={ this.state.visibleModal === 3 }
          style={ styles.bottomModalAddress }
          backdropOpacity={0.5}
          onBackButtonPress={() => this.setState({ visibleModal: null, textLength: '', isExists: false, passLength: '' })}
          onBackdropPress={() => this.setState({ visibleModal: null, textLength: '', isExists: false, passLength: '' })}
          animationOut={ 'slideOutRight' }>
          {this._renderAddAddress()}
        </Modal>

      	<Header style={{ backgroundColor: '#fff' }}>
          <View style={ styles.headerViewStyle }>
            <View style={{ marginTop: 0, marginLeft: 0, marginRight: 0, flexDirection: 'row', alignItems: 'center' }}>
              <View style = {styles.HeaderShapeView}>
                <Text style = {{ paddingTop: 0, fontSize: 20, color: '#555555', fontWeight: 'bold' }}>Cart</Text>
                <Text style={{ color: '#03a9f4', fontSize: 12, fontWeight: 'normal', paddingLeft: 0, paddingBottom: 0 }} >{this.state.totalQty} items, To Pay: ₹ {this.state.totalPrice}</Text>
              </View>
            </View>
          </View>
        </Header>

        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View>
            	<Text style={{ fontSize: 13, color: '#03a9f4', paddingLeft: 10 }}>Items requiring prescriptions (1)</Text>
            	<List
                dataArray={this.state.products}
                renderRow={(product) =>
            		(<ListItem>
                    <View style={styles.view}>
                      <Image resizeMode = 'contain' style={styles.image} source={{ uri: product.item.imagePath }} />
                      <View style={ styles.info }>
                        <View style={{ justifyContent: 'flex-start', paddingTop: 3 }}>
                          <Text style={styles.pro_name}>{product.item.name}</Text>
                        </View>
                        <Text note style={styles.descrip}>{product.item.brand}</Text>
                        <View style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                          paddingLeft: 5,
                          paddingTop: 5
                        }}>
                          <Text style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#4d4d4d',
                            alignSelf: 'flex-end',
                            paddingBottom: 2 }}>₹ {product.price}</Text>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableHighlight
                              onPress={() => this.decreaseByOne(product.item._id)}
                              underlayColor='#dbdbdb'>
                              <View style={styles.button}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}> - </Text>
                              </View>
                            </TouchableHighlight>
                            <Text style={{
                              fontSize: 16,
                              fontWeight: 'bold',
                              color: '#4d4d4d' }}> {product.qty} </Text>
                            <TouchableHighlight
                              onPress={() => this.increaseByOne(product.item._id)}
                              underlayColor='#dbdbdb'>
                              <View style={styles.buttons}>
                                <Text style={{
                                  fontSize: 17,
                                  color: '#03a9f4',
                                  fontWeight: 'bold' }}> + </Text>
                              </View>
                            </TouchableHighlight>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ListItem>)
					    } />
            </View>

            <View style={{ paddingTop: 10 }}>
            	<Text style={{
                fontSize: 13,
                color: '#03a9f4',
                paddingLeft: 10 }}>
                Items not requiring prescriptions (1)
              </Text>
            </View>

            <View style={styles.pricing}>
              <View style={{ marginLeft: 10, marginRight: 10, justifyContent: 'space-between' }}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center' }}>
                  <Text style={styles.price_text}>MRP Total</Text>
                  <Text style={styles.price_text}>₹ {this.state.totalPrice}</Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center' }}>
                  <Text style={styles.price_text}>Discount</Text>
                  <Text style={styles.price_text}>NA</Text>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 4,
                  borderBottomColor: '#cccccc',
                  borderBottomWidth: 1
                }}
              />
              <View style={{ marginLeft: 10, marginRight: 10 }}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <Text style={styles.price_text}>Coupon Discount</Text>
                  <Text
                    onPress={() => this.setState({ visibleModal: 1 })}
                    style={styles.coupon}>APPLY</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center' }}>
                  <Text style={styles.price_text}>Delivery Charges</Text>
                  <Text style={styles.price_text}>₹ 0</Text>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 4,
                  borderBottomColor: '#cccccc',
                  borderBottomWidth: 1
                }}
              />
              <View style={{ marginLeft: 10, marginRight: 10 }}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <Text style={styles.price_text} />
                  <Text style={styles.total}>To Pay: ₹ {this.state.totalPrice}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <Button
          large
          containerViewStyle={{ width: '100%', marginLeft: 0 }}
          buttonStyle={{ alignItems: 'center', justifyContent: 'center' }}
          backgroundColor={'#03a9f4'}
          title={`CONFIRM YOUR ORDER`}
          fontWeight={'bold'}
          fontSize = {17}
          onPress={() => this.setState({ visibleModal: 2 })}
        />
      </Container>
    )
  }
}
