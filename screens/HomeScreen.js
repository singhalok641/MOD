import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight, } from 'react-native';
import { 
  Container, 
  Header, 
  Item, 
  Input, 
  Text, 
  List, 
  ListItem, 
  Body, 
  Content, 
  Left, 
  Right,
  Picker,
  Form,
  Item as FormItem,
  Card,
  CardItem } from 'native-base';
import Carousel from 'react-native-banner-carousel';
import { Button, Icon } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Modal from 'react-native-modalbox';
//import { Constants, Location, Permissions } from 'expo';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;

const images = [
    require('../assets/images/1.png'),
    require('../assets/images/2.png'),
    require('../assets/images/5.png')
];

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key0',
      address: null,
      area:null,
      location: null,
      errorMessage: null,
    };
  }

  /*componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }*/

  /*_getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };*/

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }

  renderPage(image, index) {
    //console.log(image);
        return (
          <View key={index}>
            <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode:'contain' }} source={image} />
          </View>
        );
    }

  render() {

    /*let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }*/

    //console.log({text});
    return (
      <Container>  
        <Header style={{  backgroundColor:'#fff' }}>
          <View style={ styles.headerViewStyle }>
            <TouchableHighlight style={ styles.addressViewStyle } onPress={() => this.refs.gps.open()} underlayColor='#cccccc' >
              <View style={ styles.addressViewStyle }>
                <View style={{ flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start',paddingTop: 5 }}>
                  <Text style={{ fontSize: 17 ,fontWeight: 'bold' , color: '#555555'}}>{this.state.area}</Text>
                  {<Icon name={'keyboard-arrow-down'} type='MaterialIcons' size={25} style={{ paddingLeft: 5}} color={"#03a9f4"}/>}             
                </View>
                <Text note style={{ fontSize: 13 }} numberOfLines={1} >{this.state.address}</Text>        
              </View>
            </TouchableHighlight>
            {/*<TouchableHighlight style={ styles.filterViewStyle } onPress={() => this.refs.gps.open()} underlayColor='#cccccc' >
              <View style={ styles.filterViewStyle }>
                <Text style = {{fontWeight:'bold',fontSize: 13,color: '#555555'}}>FILTER</Text>
                {<Icon name={'sort'} type='MaterialIcons' size={17} style={{ paddingRight: 5}} color={"#03a9f4"}/> }
              </View>
            </TouchableHighlight>*/}
          </View>
        </Header>

        {
          /*this.state.address === null ? (
            //this.refs.gps.open();
            )
          :
          (
            console.log('hey there');
            )*/
        }

        <Modal style={ styles.modal6 } position={"top"} ref={"gps"} backButtonClose={true} coverScreen={true} animationDuration={300} backdropPressToClose={false} swipeToClose={false} >
          <View style = {{ flex:1, flexDirection:'row', marginTop:0 ,marginLeft:0, marginRight:0 }}>
            <View style = {{ flex:1 }}>
              <Icon
                iconStyle={{ alignSelf:'center', marginLeft:17, marginTop: 30 }}
                name='arrow-back'
                type='MaterialIcons'
                color='#555555'
                size={25}
                onPress={() => this.refs.gps.close()} 
              />
            </View>
            <View style={{ flex:6, marginTop:0 ,marginLeft:5, marginRight:0, flexDirection:'column', justifyContent:'space-around' }} >  
              <Text style = {{ marginTop: 20 ,fontSize:10, color: '#03a9f4', fontWeight: 'bold', marginLeft:10, marginBottom:0 }}>SET DELIVERY LOCATION</Text>
              <GooglePlacesAutocomplete
                placeholder='Search for area, street name... '
                minLength={3} // minimum length of text to search
                autoFocus={false}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                listViewDisplayed='auto'    // true/false/undefined
                fetchDetails={true}
                //renderDescription={row => row.description} // custom description render
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                  this.setState({
                    address: data.description,
                    area: data.terms[0].value,
                  });
                  //this.refs.gps.close();
                  console.log(data);
                  console.log(details);
                }}

                getDefaultValue={() => ''}
                query={{
                  // available options: https://developers.google.com/places/web-service/autocomplete
                  key: 'AIzaSyAqPFyiVLz4NVwc9XhYCmevgkorkg3CRmk',
                  language: 'en', // language of the results
                  //types:  // default: 'geocode'
                }}
                styles={{
                  container:{
                    borderBottomWidth:0,
                  },
                  textInputContainer: {
                    width: '100%',
                    borderTopWidth: 0,
                    borderBottomWidth:0,
                    backgroundColor:'#fff',
                  },
                  textInput: {
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom:0,
                    height: 40,
                    color: '#5d5d5d',
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop:0,
                    paddingBottom: 0,
                  },
                  description: {
                    
                  },
                  predefinedPlacesDescription: {
                    color: '#1faadb'
                  }
                }}
                  
                currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                currentLocationLabel="Current location"
                nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }}
                GooglePlacesSearchQuery={{
                  // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                  rankby: 'distance',
                  types: 'sublocality_level_2'
                }}

                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                predefinedPlaces={[]}

                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                //renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
                //renderRightButton={() => <Text>Custom text after the input</Text>}  
              />
            </View>
          </View>
        </Modal>  

        <Modal style={ styles.modal4 } position={"top"} ref={"search"} backButtonClose={true} coverScreen={true} animationDuration={300} backdropPressToClose={false}>
          <View style = {{ height:150 }}>
            <Card style={{ marginTop:0 ,marginLeft:0, marginRight:0 }}>
              <Icon
                iconStyle={{ alignSelf:'flex-start', marginLeft:17, marginTop:20, marginBottom:10 }}
                name='clear'
                type='MaterialIcons'
                color='#555555'
                size={25}
                onPress={() => this.refs.search.close()} />
              <Item style={{ borderColor: 'transparent', marginLeft:15, marginRight:15 }}> 
                <Input placeholder="Type any product" placeholderTextColor={'#a8a8a8'} style={{ fontSize:25, fontWeight:'bold' }} autoFocus={true}/>
              </Item>
            </Card>
          </View>
        </Modal>

        <Modal style={ styles.modal5 } position={"top"} ref={"upload"} backButtonClose={true} coverScreen={true} animationDuration={300} backdropPressToClose={false}>
          <View style = {{ height:70 }}>
            <Card style={{ marginTop:0 ,marginLeft:0, marginRight:0 ,flexDirection : 'row',alignItems : 'center'}}>
              <Icon
                iconStyle={{ marginLeft:17, marginRight:15, marginTop:20, marginBottom:10 }}
                name='arrow-back'
                type='MaterialIcons'
                color='#555555'
                size={25}
                onPress={() => this.refs.upload.close()} />
              <Text style = {{paddingTop: 8 ,fontSize:20, color: '#555555', fontWeight: 'bold'}}>Upload Prescription</Text>
            </Card>
          </View>
          <View >
          <Text style = {{paddingTop: 8 ,paddingLeft: 25, fontSize:14,color: '#03a9f4'}}>Choose an option to upload</Text>
          <View style = {styles.SquaresShapeView}>
            <Container style={{paddingLeft: 0, flexDirection: 'column' }}>
              <Icon
                iconStyle={{ alignSelf:'center', marginBottom:0}}
                name='camera-alt'
                type='MaterialIcons'
                color='#808080'
                size={39}/>
              <Text style={{textAlign:'center'  ,fontSize: 14, color: '#808080'}}>Camera</Text>  
            </Container>

            <Container style={{paddingLeft: 0,flexDirection: 'column' }}>
              <Icon
                iconStyle={{ alignSelf:'center', marginBottom:0}}
                name='photo-size-select-actual'
                type='MaterialIcons'
                color='#808080'
                size={39} />
              <Text style={{textAlign:'center'  ,fontSize: 14, color: '#808080'}}>Gallery</Text>  
            </Container>

            <Container style={{paddingRight: 0,flexDirection: 'column' }}>
              <Icon
                iconStyle={{ alignSelf:'center',  marginBottom:0}}
                name='view-list'
                type='MaterialIcons'
                color='#808080'
                size={39}/>
              <Text style={{textAlign:'center'  ,fontSize: 14, color: '#808080'}}>Prescriptions</Text>  
            </Container>
          </View>
          <Text style = {{paddingTop: 0 ,paddingLeft: 25, fontSize:14,color: '#03a9f4'}}>Attached Prescriptions</Text>
          </View>
        </Modal>
        
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
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
                  buttonStyle={{ alignItems:'flex-start', justifyContent:'flex-start'}}
                  backgroundColor={'#fff'}
                  color={'#a8a8a8'}
                  icon={{ name: 'search', color:'#555555' }}
                  title='Search any product' />
              </Card>
              <Card>
                <Button
                  onPress={() => this.refs.upload.open()}
                  buttonStyle={{ alignItems:'flex-start', justifyContent:'flex-start'}}
                  backgroundColor={'#fff'}
                  color={'#a8a8a8'}
                  icon={{name: 'file-upload', color:'#555555'}}
                  title='Upload Prescription' />
              </Card>
              {/*<Text>hey{text}</Text>*/}
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
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop:10,
  },
  headerViewStyle:{
    flex:1, 
    flexDirection: 'row',
  },
  addressViewStyle:{
    flex:1,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    paddingTop: 3,
    paddingLeft: 10
  },
  filterViewStyle:{
    flex:1,
    flexDirection: 'row' ,
    alignItems: 'center', 
    justifyContent:'center',
    //paddingRight: 10,
    //paddingLeft:10,
  },
  containerCarousel: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center',
    marginBottom: 20
  },
  modal4: {
    justifyContent: 'flex-start',
  },
  modal5: {
    justifyContent: 'flex-start',
  },
  modal6: {
    justifyContent: 'flex-start',
  },
  RectangleShapeView:{
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
  SquaresShapeView:{
    height: 95, 
    flexDirection: 'row' ,
    paddingTop: 17,
    justifyContent: 'space-between',
    alignItems : 'flex-start'
  }
});
