import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Clipboard,
  Share,
  Dimensions,
  TouchableHighlight,
  ActivityIndicator } from 'react-native'
import {
  Container,
  Header,
  Item,
  Input,
  Text,
  Card } from 'native-base'
import Carousel from 'react-native-banner-carousel'
import { Button, Icon } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Modal from 'react-native-modalbox'
import { Constants, Location, Permissions, ImagePicker } from 'expo'
import GridView from 'react-native-super-grid'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10
  },
  headerViewStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  addressViewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 2,
    paddingLeft: 7
  },
  products: {
    flex: 1,
    height: 120,
    width: 140,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    height: 90,
    width: 139,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  filterViewStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerCarousel: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  modal4: {
    justifyContent: 'flex-start'
  },
  modal5: {
    justifyContent: 'flex-start'
  },
  modal6: {
    justifyContent: 'flex-start'
  },
  RectangleShapeView: {
    width: 330,
    height: 45,
    borderWidth: 0,
    borderColor: '#a8a8a8',
    paddingLeft: 11,
    paddingTop: 4,
    marginLeft: 22,
    marginTop: 0,
    borderRadius: 1
  },
  SquaresShapeView: {
    height: 95,
    flexDirection: 'row',
    paddingTop: 17,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  gridView: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff'
  }
})

const BannerWidth = Dimensions.get('window').width
const BannerHeight = 180
const images = [
  require('../assets/images/carousel/1.png'),
  require('../assets/images/carousel/2.png'),
  require('../assets/images/carousel/5.png')
]

const natural = require('../assets/images/products/natural.png')
const baby = require('../assets/images/products/baby.png')
const personal = require('../assets/images/products/personal.png')
const diabetes = require('../assets/images/products/diabetes.png')
const health = require('../assets/images/products/health_care.png')
const devices = require('../assets/images/products/devices.png')
const food = require('../assets/images/products/food.png')
const sexual = require('../assets/images/products/sexual.png')

async function uploadImageAsync(uri) {
  let apiUrl = 'http://192.168.43.217:8082/stores/users/prescriptionUpload'

  let uriParts = uri.split('.')
  let fileType = uriParts[uriParts.length - 1]

  let formData = new FormData()
  formData.append('photo', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`
  })

  let options = {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
    }
  }

  return fetch(apiUrl, options)
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      selected1: 'key0',
      address: null,
      area: 'Locating...',
      isOpen: false,
      location: null,
      errorMessage: null,
      latitude: null,
      longitude: null,
      image: null,
      uploading: false
    }
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator'
      })
    } else {
      this._getLocationAsync()
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    let text = ''
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      })
    }

    let location = await Location.getCurrentPositionAsync({})
    this.setState({ location })
    console.log(this.state.location)
    console.log(this.state.errorMessage)

    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + `${this.state.location.coords.latitude}` + ',' + `${this.state.location.coords.longitude}` + '&key=' + 'AIzaSyAqPFyiVLz4NVwc9XhYCmevgkorkg3CRmk')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(JSON.stringify(responseJson.results[0].formatted_address))
        console.log(this.state.location)
        this.setState({
          address: responseJson.results[0].formatted_address,
          area: responseJson.results[0].address_components[0].short_name
        })

        text = responseJson.results[0].formatted_address
        console.log(text)
      })
  };

  onValueChange(value: string) {
    this.setState({
      selected1: value
    })
  }

  openLocationModal() {
    this.setState({
      isOpen: true
    })
  }

  renderPage(image, index) {
    // console.log(image);
    return (
      <View key={index}>
        <Image
          style=
            {{
              width: BannerWidth,
              height: BannerHeight,
              resizeMode: 'contain'
            }}
          source={image}
        />
      </View>
    )
  }

  /* _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgba(0,0,0,0.4)',
              alignItems: 'center',
              justifyContent: 'center'
            }
          ]}>
          <ActivityIndicator color='#fff' animating size='large' />
        </View>
      )
    }
  };*/

  _maybeRenderImage = () => {
    let { image } = this.state
    if (!image) {
      return
    }

    return (
      <View
        style={{
          marginTop: 30,
          width: 250,
          borderRadius: 3,
          elevation: 2,
          shadowColor: 'rgba(0,0,0,1)',
          shadowOpacity: 0.2,
          shadowOffset: { width: 4, height: 4 },
          shadowRadius: 5
        }}>
        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            overflow: 'hidden'
          }}>
          <Image source={{ uri: 'file:///home/alok/Documents/MOD-DEV/backend-modstores/public/images/prescriptionUploads/photo-1524295705367' }} style={{ width: 250, height: 250 }} />
        </View>

        <Text
          onPress={this._copyToClipboard}
          onLongPress={this._share}
          style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
          {image}
        </Text>
      </View>
    )
  }

  _share = () => {
    Share.share({
      message: this.state.image,
      title: 'Check out this photo',
      url: this.state.image
    })
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image)
    //alert('Copied image URL to clipboard')
  };

  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      //allowsEditing: true,
      //aspect: [4, 3]
    })

    this._handleImagePicked(pickerResult)
  };

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      //allowsEditing: true,
      //aspect: [4, 3]
    })

    this._handleImagePicked(pickerResult)
  };

  _handleImagePicked = async pickerResult => {
    let uploadResponse
    let uploadResult
    console.log(pickerResult)
    try {
      this.setState({ uploading: true })

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri)
        uploadResult = await uploadResponse.json()
        this.setState({ image: uploadResult.location })
        console.log({ uploadResponse })
        console.log({ uploadResult })
      }
    } catch (e) {
      console.log({ uploadResponse })
      console.log({ uploadResult })
      console.log({ e })
    } finally {
      this.setState({ uploading: false })
    }
  };

  render() {
    const { navigate } = this.props.navigation
    let { image } = this.state
    const items = [
      { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
      { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' }
    ]

    return (
      <Container>
        <Header style={{ backgroundColor: '#fff' }}>
          <View style={ styles.headerViewStyle }>
            <TouchableHighlight
              style={ styles.addressViewStyle }
              onPress={() => this.setState({ isOpen: true })}
              underlayColor='#cccccc' >
              <View style={ styles.addressViewStyle }>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: 5 }}>
                  <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#555555' }}>HOME</Text>
                  {<Icon name={'keyboard-arrow-down'} type='MaterialIcons' size={25} style={{ paddingLeft: 5 }} color={'#03a9f4'}/>}
                </View>
                <Text note style={{ fontSize: 13 }} numberOfLines={1} >{this.state.address}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </Header>

        <Modal isOpen={this.state.isOpen} onClosed={() => this.setState({ isOpen: false })} style={ styles.modal6 } position={'top'} ref={'gps'} backButtonClose={true} coverScreen={true} animationDuration={300} backdropPressToClose={false} swipeToClose={false} >
          <View style = {{ flex: 1, flexDirection: 'row', marginTop: 0, marginLeft: 0, marginRight: 0 }}>
            <View style = {{ flex: 1 }}>
              <Icon
                iconStyle={{ alignSelf: 'center', marginLeft: 17, marginTop: 30 }}
                name='arrow-back'
                type='MaterialIcons'
                color='#555555'
                size={25}
                onPress={() => this.setState({ isOpen: false })}
              />
            </View>
            <View style={{ flex: 6, marginTop: 0, marginLeft: 5, marginRight: 0, flexDirection: 'column', justifyContent: 'space-around' }} >
              <Text style = {{ marginTop: 20, fontSize: 12, color: '#03a9f4', fontWeight: 'bold', marginLeft: 10 }}>SET DELIVERY LOCATION</Text>
              <GooglePlacesAutocomplete
                placeholder='Search for area, street name... '
                minLength={3}
                autoFocus={false}
                returnKeyType={'search'}
                listViewDisplayed='auto'
                fetchDetails={true}
                // renderDescription={row => row.description} // custom description render
                onPress={(data, details = null) => {
                  this.setState({
                    address: data.description,
                    area: data.terms[0].value
                    // isOpen: false,
                  })
                  console.log('onPress')
                  setTimeout(() => {
                    this.refs.gps.close()
                  }, 1000)
                  // console.log(data);
                  // console.log(details);
                }}

                getDefaultValue={() => ''}
                query={{
                  // available options: https://developers.google.com/places/web-service/autocomplete
                  key: 'AIzaSyAqPFyiVLz4NVwc9XhYCmevgkorkg3CRmk',
                  language: 'en'
                  // types:  // default: 'geocode'
                }}
                styles={{
                  textInputContainer: {
                    width: '100%',
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    backgroundColor: '#fff'
                  },
                  textInput: {
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    height: 40,
                    color: '#5d5d5d',
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 0,
                    paddingBottom: 0
                    // position: 'fixed',
                  },
                  predefinedPlacesDescription: {
                    color: '#5d5d5d',
                    fontSize: 18,
                    height: 40,
                    fontWeight: 'bold'
                  }
                }}

                currentLocation={true}
                currentLocationLabel='Current location'
                nearbyPlacesAPI='GoogleReverseGeocoding' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                  rankby: 'distance'
                  // types: 'locality'
                }}
                GooglePlacesSearchQuery={{
                  // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                  rankby: 'distance',
                  types: 'sublocality_level_2'
                }}

                filterReverseGeocodingByTypes={['locality', 'sublocality_level_2']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                predefinedPlaces={[]}
                keyboardShouldPersistTaps='always'
                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                // renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
                // renderRightButton={() => <Text>Custom text after the input</Text>}
              />
            </View>
          </View>
        </Modal>

        <Modal style={ styles.modal4 } position={'top'} ref={'search'} backButtonClose={true} coverScreen={true} animationDuration={300} backdropPressToClose={false} swipeToClose={false}>
          <View style = {{ height: 120 }}>
            <Card style={{ marginTop: 0, marginLeft: 0, marginRight: 0 }}>
              <Icon
                iconStyle={{ alignSelf: 'flex-start', marginLeft: 17, marginTop: 20, marginBottom: 10 }}
                name='arrow-back'
                type='MaterialIcons'
                color='#555555'
                size={25}
                onPress={() => this.refs.search.close()} />
              <Item style={{ borderColor: 'transparent', marginLeft: 15, marginRight: 15 }}>
                <Input placeholder='Type any product' placeholderTextColor={'#a8a8a8'} style={{ fontSize: 25, fontWeight: 'bold' }} autoFocus={true}/>
              </Item>
            </Card>
          </View>
        </Modal>

        <Modal style={ styles.modal5 } position={'top'} ref={'upload'} backButtonClose={true} coverScreen={true} animationDuration={300} backdropPressToClose={false} swipeToClose={false}>
          <View style = {{ height: 70 }}>
            <Card style={{ marginTop: 0, marginLeft: 0, marginRight: 0, flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                iconStyle={{ marginLeft: 17, marginRight: 15, marginTop: 20, marginBottom: 10 }}
                name='arrow-back'
                type='MaterialIcons'
                color='#555555'
                size={25}
                onPress={() => this.refs.upload.close()} />
              <Text style = {{ paddingTop: 8, fontSize: 20, color: '#555555', fontWeight: 'bold' }}>Upload Prescription</Text>
            </Card>
          </View>
          <View >
            <Text style = {{ paddingTop: 8, paddingLeft: 25, fontSize: 14, color: '#03a9f4' }}>Choose an option to upload</Text>
            <View style = {styles.SquaresShapeView}>
              <Container
                style={{ paddingLeft: 0, flexDirection: 'column' }}>
                <Icon
                  iconStyle={{ alignSelf: 'center', marginBottom: 0 }}
                  name='camera'
                  type='entypo'
                  color='#808080'
                  size={39}
                  onPress={this._takePhoto} />
                <Text style={{ textAlign: 'center', fontSize: 14, color: '#808080' }}>Camera</Text>
              </Container>

              <Container style={{ paddingLeft: 0, flexDirection: 'column' }}>
                <Icon
                  iconStyle={{ alignSelf: 'center', marginBottom: 0 }}
                  name='photo-size-select-actual'
                  type='MaterialIcons'
                  color='#808080'
                  size={39}
                  onPress={this._pickImage} />
                <Text style={{ textAlign: 'center', fontSize: 14, color: '#808080' }}>Gallery</Text>
              </Container>

              <Container style={{ paddingRight: 0, flexDirection: 'column' }}>
                <Icon
                  iconStyle={{ alignSelf: 'center', marginBottom: 0 }}
                  name='clipboard'
                  type='feather'
                  color='#808080'
                  size={39}/>
                <Text style={{ textAlign: 'center', fontSize: 14, color: '#808080' }}>Prescriptions</Text>
              </Container>
            </View>
            <Text style = {{ paddingTop: 0, paddingLeft: 25, fontSize: 14, color: '#03a9f4' }}>Attached Prescriptions</Text>
            {/*<View
              style={{
                alignItems: 'flex-start',
                marginTop: 20,
                marginLeft: 25,
                width: 90,
                borderRadius: 3,
                elevation: 2,
                shadowColor: 'rgba(0,0,0,1)',
                shadowOpacity: 0.2,
                shadowOffset: { width: 4, height: 4 },
                shadowRadius: 5
              }}>
              <View
                style={{
                  borderTopRightRadius: 3,
                  borderTopLeftRadius: 3,
                  overflow: 'hidden'
                }}>
                <Image source={{ uri: 'http://www.prescriptionmaker.com/demo.jpg' }} style={{ width: 75, height: 90 }} />
              </View>

              <Text
                onPress={this._copyToClipboard}
                onLongPress={this._share}
                style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                {image}
              </Text>
            </View>*/}
          </View>
          <GridView
              itemDimension={80}
              items={items}
              style={styles.gridView}
              renderItem={item => (
                <View
                  style={{
                    alignItems: 'flex-start',
                    marginTop: 10,
                    width: 90,
                    borderRadius: 3,
                    elevation: 2,
                    shadowColor: 'rgba(0,0,0,1)',
                    shadowOpacity: 0.2,
                    shadowOffset: { width: 4, height: 4 },
                    shadowRadius: 5
                  }}>
                  <View
                    style={{
                      borderTopRightRadius: 3,
                      borderTopLeftRadius: 3,
                      overflow: 'hidden'
                    }}>
                    <Image source={{ uri: 'http://www.prescriptionmaker.com/demo.jpg' }} style={{ width: 75, height: 90 }} />
                  </View>

                  <Text
                    onPress={this._copyToClipboard}
                    onLongPress={this._share}
                    style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                    {image}
                  </Text>
                </View>
              )}
            />
        </Modal>

        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <Card style={styles.containerCarousel}>
              <Carousel
                autoplay
                autoplayTimeout={5500}
                loop
                index={0}
                pageSize={BannerWidth}>
                {images.map((image, index) => this.renderPage(image, index))}
              </Carousel>
            </Card>
            <Card>
              <Button
                onPress={() => this.refs.search.open()}
                buttonStyle={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
                backgroundColor={'#fff'}
                color={'#a8a8a8'}
                icon={{ name: 'search', color: '#555555' }}
                title='Search any product' />
            </Card>
            <Card>
              <Button
                onPress={() => this.refs.upload.open()}
                buttonStyle={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
                backgroundColor={'#fff'}
                color={'#a8a8a8'}
                icon={{ name: 'file-upload', color: '#555555' }}
                title='Upload Prescription' />
            </Card>
            <View style={{ marginBottom: 35, flexWrap: 'wrap' }}>
              <Text style={{ paddingTop: 17, fontSize: 17, color: '#555555', fontWeight: 'bold' }}>M O D - Products</Text>

              <View style={{ paddingTop: 8, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 7 }}>
                  <TouchableHighlight onPress={() => navigate('ProductsScreen', { category: `${'personal care'}`, title: `${'Personal Care'}` })} underlayColor='#dbdbdb' >
                    <Card style={styles.products}>
                      <Image resizeMode = 'contain' style={styles.image} source={personal}/>
                      <Text style={{ paddingLeft: 8, paddingTop: 4, fontSize: 14, color: '#555555', fontWeight: 'bold' }}>Personal Care</Text>
                    </Card>
                  </TouchableHighlight>
                </View>

                <View style={{ marginTop: 7 }}>
                  <TouchableHighlight onPress={() => navigate('ProductsScreen', { category: `${'health care'}`, title: `${'Health Care'}` })} underlayColor='#dbdbdb' >
                    <Card style={styles.products}>
                      <Image resizeMode = 'contain' style={styles.image} source={health}/>
                      <Text style={{ paddingLeft: 8, paddingTop: 4, fontSize: 14, color: '#555555', fontWeight: 'bold' }}>Health Care</Text>
                    </Card>
                  </TouchableHighlight>
                </View>
              </View>

              <View style={{ paddingTop: 8, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 7 }}>
                  <TouchableHighlight onPress={() => navigate('ProductsScreen', { category: `${'healthcare devices'}`, title: `${'HealthCare Devices'}` })} underlayColor='#dbdbdb' >
                    <Card style={styles.products}>
                      <Image resizeMode = 'contain' style={styles.image} source={devices}/>
                      <Text style={{ paddingLeft: 8, paddingTop: 4, fontSize: 14, color: '#555555', fontWeight: 'bold' }}>Healthcare Devices</Text>
                    </Card>
                  </TouchableHighlight>
                </View>

                <View style={{ marginTop: 7 }}>
                  <TouchableHighlight onPress={() => navigate('ProductsScreen', { category: `${'diabetic care'}`, title: `${'Diabetic Care'}` })} underlayColor='#dbdbdb' >
                    <Card style={styles.products}>
                      <Image resizeMode = 'contain' style={styles.image} source={diabetes}/>
                      <Text style={{ paddingLeft: 8, paddingTop: 4, fontSize: 14, color: '#555555', fontWeight: 'bold' }}>Diabetic Care</Text>
                    </Card>
                  </TouchableHighlight>
                </View>
              </View>

              <View style={{ paddingTop: 12, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 7 }}>
                  <TouchableHighlight onPress={() => navigate('ProductsScreen', { category: `${'natural care'}`, title: `${'Natural Care'}` })} underlayColor='#dbdbdb' >
                    <Card style={styles.products}>
                      <Image resizeMode = 'contain' style={styles.image} source={natural}/>
                      <Text style={{ paddingLeft: 8, paddingTop: 4, fontSize: 14, color: '#555555', fontWeight: 'bold' }}>Natural Care</Text>
                    </Card>
                  </TouchableHighlight>
                </View>

                <View style={{ marginTop: 7 }}>
                  <TouchableHighlight onPress={() => navigate('ProductsScreen', { category: `${'food & nutrition'}`, title: `${'Food & Nutrition'}` })} underlayColor='#dbdbdb' >
                    <Card style={styles.products}>
                      <Image resizeMode = 'contain' style={styles.image} source={food}/>
                      <Text style={{ paddingLeft: 8, paddingTop: 4, fontSize: 14, color: '#555555', fontWeight: 'bold' }}>Food & Nutrition</Text>
                    </Card>
                  </TouchableHighlight>
                </View>
              </View>

              <View style={{ paddingTop: 12, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 7 }}>
                  <TouchableHighlight onPress={() => navigate('ProductsScreen', { category: `${'sexual wellness'}`, title: `${'Sexual Wellness'}` })} underlayColor='#dbdbdb' >
                    <Card style={styles.products}>
                      <Image resizeMode = 'contain' style={styles.image} source={sexual}/>
                      <Text style={{ paddingLeft: 8, paddingTop: 4, fontSize: 14, color: '#555555', fontWeight: 'bold' }}>Sexual Wellness</Text>
                    </Card>
                  </TouchableHighlight>
                </View>
                <View style={{ marginTop: 7 }}>
                  <TouchableHighlight onPress={() => navigate('ProductsScreen', { category: `${'baby & mother'}`, title: `${'Baby & Mother'}` })} underlayColor='#dbdbdb' >
                    <Card style={styles.products}>
                      <Image resizeMode = 'contain' style={styles.image} source={baby}/>
                      <Text style={{ paddingLeft: 8, paddingTop: 4, fontSize: 14, color: '#555555', fontWeight: 'bold' }}>Baby & Mother</Text>
                    </Card>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Container>
    )
  }
}
