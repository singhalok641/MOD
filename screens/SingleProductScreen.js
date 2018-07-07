import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import {
  Container,
  Text,
  Header
} from 'native-base'
import { Button, Icon } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
  	alignSelf: 'center',
    width: 220,
    height: 220,
    paddingTop: 15,
    paddingBottom: 10
  },
  pro_name: {
    fontSize: 16,
    paddingLeft: 5,
    color: '#646464',
    fontWeight: 'bold'
  },
  price: {
  	paddingTop: 8,
    fontSize: 20,
    paddingLeft: 5,
    color: '#646464'
  },
  descrip: {
    fontSize: 13,
    paddingTop: 5,
    alignSelf: 'stretch',
    paddingLeft: 5,
    fontWeight: 'bold',
    color: '#0a9efc'
  },
  description: {
    fontSize: 15,
    alignSelf: 'stretch',
    paddingLeft: 5,
    color: '#0a9efc'
  },
  details: {
    fontSize: 14,
    alignSelf: 'stretch',
    paddingLeft: 5,
    paddingTop: 4,
    paddingBottom: 20,
    color: '#909090'
  },
  info: {
  	paddingTop: 12,
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
  }
})

export default class SingleProductScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
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
    return (
      <Container>
      	<Header style={{ backgroundColor: '#fff' }}>
          <View style={{ marginTop: 0, marginLeft: 0, marginRight: 0, flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            {/*<Icon
              iconStyle={{ marginLeft: 8, marginRight: 15, marginTop: 20, marginBottom: 10 }}
              name='arrow-back'
              type='MaterialIcons'
              color='#555555'
              size={25}
              onPress={() => this.refs.upload.close()} />*/}
            <Text style = {{ paddingTop: 8, fontSize: 20, color: '#555555', fontWeight: 'bold' }}>Product Description</Text>
          </View>
        </Header>

        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View>
              <View style={styles.image}>
              	<Image
                  resizeMode = 'contain'
                  style={styles.image}
                  source={{ uri: this.props.navigation.state.params.image }} />
              </View>
              <View style={{
                borderBottomColor: '#abb8c3',
                borderBottomWidth: 0.5,
                paddingTop: 20
  				    }}
			       />
              <View style={styles.info}>
                <Text style={styles.pro_name}>{this.props.navigation.state.params.name}</Text>
              	<Text style={styles.descrip}>{this.props.navigation.state.params.brand}</Text>
                <Text style={styles.price}>₹ {this.props.navigation.state.params.price}</Text>
              </View>
              <View
        				style={{
        				paddingTop: 12,
          			borderBottomColor: '#abb8c3',
          			borderBottomWidth: 0.5
        				}}
      			  />
        			  <View style={{ paddingTop: 12 }}>
        			  	<View style={{ flexDirection: 'row', alignItems: 'center' }}>
        			  		<Icon
                      iconStyle={{ marginRight: 3, paddingLeft: 5 }}
                      name='ios-paper-outline'
                      type='ionicon'
                      color='#4e4e4e'
                      size={18}
        			  		/>
        			  		<Text style={styles.description}>Description</Text>
        			  	</View>
        			  	<View>
        			  		<Text style={ styles.details }>
        			  			{this.props.navigation.state.params.description}
        			  		</Text>
        			  	</View>
        			  </View>
              </View>
          </ScrollView>
        </View>
        <View style={{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            large
            containerViewStyle={{ width: '50%' }}
            buttonStyle={{ alignItems: 'center', justifyContent: 'center' }}
            backgroundColor={'#03a9f4'}
            title={`ADD TO CART`}
            fontWeight={'bold'}
            fontSize = {17}
            onPress={() => this.addToCart(this.props.navigation.state.params.id)}
          />
          <Button
            large
            containerViewStyle={{ width: '50%' }}
            buttonStyle={{ alignItems: 'center', justifyContent: 'center' }}
            backgroundColor={'#ffffff'}
            textStyle={{ color: '#03a9f4' }}
            title={`BUY NOW`}
            fontWeight={'bold'}
            fontSize = {17}
          />
        </View>
      </Container>
    )
  }
}
