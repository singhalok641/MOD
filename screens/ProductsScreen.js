import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  TouchableHighlight,
  ActivityIndicator } from 'react-native'
import {
  Container,
  Text,
  List,
  ListItem,
  Header
} from 'native-base'
// import InfiniteScrollView from 'react-native-infinite-scroll-view'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 5
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
    fontSize: 14,
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 23,
    width: 110,
    backgroundColor: '#03a9f4',
    borderRadius: 10
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

loadMoreContentAsync = async () => {
  // Fetch more data here.
  // After fetching data, you should update your ListView data source
  // manually.
  // This function does not have a return value.
}


export default class ProductsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      products: {},
      response: {},
      showToast: false
    }
  }

  componentDidMount = async () => {
    fetch(`http://192.168.0.103:8082/stores/users/getProducts/${this.props.navigation.state.params.category}?pageNo=1&size=5`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Host': '192.168.0.103:8082'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          response: responseJson,
          products: responseJson.products
        }, function () {
          console.log(this.state.products)
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  addToCart(productId) {
    fetch(`http://192.168.0.103:8082/stores/users/addToCart/${productId}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Host': '192.168.0.103:8082'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ }, function () {
          console.log(responseJson)
          if (responseJson.success === true) {
            console.log('product added to cart')
          }
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const { navigate } = this.props.navigation
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <Container>
        <Header style={{ backgroundColor: '#fff' }}>
          <View style={ styles.headerViewStyle }>
            <View style={{ marginTop: 0, marginLeft: 0, marginRight: 0, flexDirection: 'row', alignItems: 'center' }}>
              <View style = {styles.HeaderShapeView}>
                <Text style = {{ paddingTop: 0, fontSize: 20, color: '#555555', fontWeight: 'bold' }}>{this.props.navigation.state.params.title}</Text>
              </View>
            </View>
          </View>
        </Header>
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View>
              <List
                dataArray={this.state.products}
                renderRow={(product) =>
                  (<ListItem onPress={() => navigate('SingleProductScreen', { id: `${product._id}`, name: `${product.name}`, brand: `${product.brand}`, price: `${product.price}`, image: `${product.image_src}` })}>
                    <View style={styles.view}>
                      <Image resizeMode = 'contain' style={styles.image} source={{ uri: product.image_src }} />
                      <View style={ styles.info }>
                        <View style={{ justifyContent: 'flex-start', paddingTop: 3 }}>
                          <Text style={styles.pro_name}>{product.name}</Text>
                        </View>
                        <Text note style={styles.descrip}>{product.brand}</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingLeft: 5, paddingTop: 5 }}>
                          <Text style={{ flex: 1, fontSize: 14, color: '#4d4d4d', alignSelf: 'flex-end', paddingBottom: 2 }}>₹ {product.price}</Text>
                          <TouchableHighlight onPress={() => this.addToCart(product._id)} underlayColor='#dbdbdb'>
                            <View style={styles.button}>
                              <Text style={{ fontSize: 14, color: '#ffffff', fontWeight: 'bold' }}>ADD TO CART</Text>
                            </View>
                          </TouchableHighlight>
                        </View>
                      </View>
                    </View>
                  </ListItem>)
                } />
            </View>
          </ScrollView>
        </View>
      </Container>
    )
  }
}
