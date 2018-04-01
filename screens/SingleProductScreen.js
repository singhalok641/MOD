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
  Header,
  Card,
  List,
  ListItem } from 'native-base'
import { Button, Icon } from 'react-native-elements'

const image = require('../assets/images/whis.jpg')
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
    width: 250,
    height: 250
  },
  pro_name: {
  	paddingTop: 7,
    fontSize: 18,
    paddingLeft: 5
  },
  price: {
  	paddingTop: 10,
    fontSize: 18,
    paddingLeft: 5
  },
  descrip: {
    fontSize: 17,
    paddingTop: 5,
    alignSelf: 'stretch',
    paddingLeft: 5,
    color: '#0a9efc'
  },
  description: {
    fontSize: 17,
    alignSelf: 'stretch',
    paddingLeft: 3,
    color: '#0a9efc'
  },
  details: {
    fontSize: 16,
    alignSelf: 'stretch',
    paddingLeft: 5,
    paddingTop: 4,
    paddingBottom: 20,
    color: '#666666'
  },
  info: {
  	paddingTop: 10,
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
      isLoading: true,
      products: {},
      response: {}
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>

      	<Header style={{ backgroundColor: '#fff' }}>
          	<View style={{ marginTop: 0, marginLeft: 0, marginRight: 0, flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <Icon
                iconStyle={{ marginLeft: 8, marginRight: 15, marginTop: 20, marginBottom: 10 }}
                name='arrow-back'
                type='MaterialIcons'
                color='#555555'
                size={25}
                onPress={() => this.refs.upload.close()} />
              <Text style = {{ paddingTop: 8, fontSize: 20, color: '#555555', fontWeight: 'bold' }}>Product Description</Text>
            </View>
        </Header>

        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View>
              <View style={styles.image}>
              	<Image resizeMode = 'contain' style={styles.image} source={image} />
              </View>
              <View
  				style={{
    			borderBottomColor: '#abb8c3',
    			borderBottomWidth: 0.5
  				}}
			  />
              <View style={styles.info}>
              	<Text style={styles.pro_name}>Whisper Ultra Nights XL Wings</Text>
              	<Text style={styles.descrip}>by Jhonson & Jhonson</Text>
              	<Text style={styles.price}>₹ 354</Text>
              </View>
              <View
  				style={{
  				paddingTop: 13,
    			borderBottomColor: '#abb8c3',
    			borderBottomWidth: 0.5
  				}}
			  />
			  <View style={{ paddingTop: 13 }}>
			  	<View style={{ flexDirection: 'row', alignItems: 'center', }}>
			  		<Icon
			  		 iconStyle={{ marginRight: 3 }}
                	 name='flash-on'
                	 type='MaterialIcons'
                	 color='#0a9efc'
                	 size={21}
			  		/>
			  		<Text style={styles.description}>Description</Text>
			  	</View>
			  	<View>
			  		<Text style={ styles.details }>
			  			Stay protected throughout the night with Whisper Ultra Nights sanitary pads with wings. These pads are nearly 40% longer* for leak free nights**. Whisper Ultra Nights come with a delightful scent for extra protection against odour, while the soft Dri-Weave cover ensures you feel dry all night long.
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
