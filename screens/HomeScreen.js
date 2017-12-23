import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { 
  Container, 
  Header, 
  Item, 
  Input, 
  Icon, 
  Button, 
  Text, 
  List, 
  ListItem, 
  Body, 
  Content, 
  Thumbnail, 
  Left, 
  Right,
  Picker,
  Form,
  Item as FormItem,
  Card,
  CardItem } from 'native-base';
import Carousel from 'react-native-banner-carousel';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;

const images = [
    "../assets/images/1.png",
    "../assets/images/2.png",
    "../assets/images/3.png",
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
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

  renderPage(image, index) {
        return (
            <View key={index}>
              <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode:'contain' }} source={require('../assets/images/2.png')} />
            </View>
        );
    }

  render() {
    //console.log(BannerWidth);
    /*var deals= [{"name":"Delhi Pharmacy","offer":"12% off on all items","deliveryTime":"12 mins",thumbnail:"https://cdn.media.yp.ca/6964200/pcc_0_55893900_1417733104_r.jpg"},
                {"name":"Apollo Pharmacy","offer":"10% off on all items","deliveryTime":"14 mins", thumbnail:"https://guardian.ng/wp-content/uploads/2016/09/PHARMACY.jpg"},
                {"name":"Aditya Medical Store","offer":"15% off on all items","deliveryTime":"15 mins", thumbnail:"https://photos.smugmug.com/Streams/My-New-Life/i-fj4zbnN/0/bb3db02e/L/DSC_0918-L.jpg"},
                {"name":"MedPlus Pharmacy","offer":"20% off on all items","deliveryTime":"10 mins",thumbnail:"https://www.jpvisitor.com/images/content/20171017/f6a910e330904287.png"}];*/

    return (
      <Container>  
        <Header style={{ backgroundColor:'#fff' }}>
          <View style={ styles.headerViewStyle }>
            <View style={ styles.addressViewStyle }>
              <View style={{ flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start',paddingTop: 5 }}>
                <Text>Indirapuram</Text>
                {/*<Ionicons name={'md-arrow-dropdown'} size={32} style={{ paddingLeft: 5}} color={"#24A8FC"}/> */}             
              </View>
              <View>
                <Text note numberOfLines ={1}>697-A, Nyay Khand 1, Indirapuram, Ghaziabad</Text>        
              </View>
            </View>
            <View style={ styles.filterViewStyle }>
              <Text>FILTER</Text>
            </View>
          </View>
        </Header>

        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
              <Card style={styles.containerCarousel}>
                <Carousel
                  autoplay
                  autoplayTimeout={5000}
                  loop
                  index={0}
                  pageSize={BannerWidth}>
                  {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
              </Card>
            {/*<Text>M O D Stores</Text>
            <View style={{ flex:2,flexDirection: 'row'}}>
              <View style={{ flex:3,flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start'}}>
                <Text note>4 PHARMACY STORES</Text>
              </View>
              <View style={{ flex:2,flexDirection: 'row' ,alignItems: 'center', justifyContent:'flex-end'}}>
                <Picker
                  style={ styles.pickerStyle }
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.selected1}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Item label="RELEVANCE" value="key0" />
                  <Item label="DELIVERY TIME" value="key1" />
                  <Item label="RATING" value="key2" />
                </Picker>
              </View>
            </View>
            <View>
              <List dataArray={deals}
                renderRow={(deals) =>
                <ListItem>
                <Image style={styles.thumbnailStyle} source={{ uri: deals.thumbnail }} />
                  <Body>
                    <View style={{ flex:1,flexDirection: 'column',alignItems:'flex-start',justifyContent:'flex-start' }}>
                      <Text>{deals.name}</Text>
                      <View style={{ flex:1,flexDirection: 'row',alignItems:'flex-start',justifyContent:'flex-start' }}>
                        <Ionicons name={'ios-pricetag-outline'} size={15} style={{ paddingLeft: 14}} color={"#000000"}/>
                        <Text note>{deals.offer}</Text>
                      </View> 
                      
                      <View style={{ flex:1,flexDirection: 'row',alignItems:'flex-start',justifyContent:'flex-start' }}>
                        <Text note>{ deals.deliveryTime }</Text>  
                      </View>
                    </View>  
                  </Body>
                </ListItem>
              }>
              </List>
            </View>*/}
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
    paddingLeft : 5,
    paddingRight : 5,
    paddingTop: 5,
  },
  headerViewStyle:{
    flex:1, 
    flexDirection: 'row',
  },
  addressViewStyle:{
    flex:3,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    paddingTop: 5,
  },
  filterViewStyle:{
    flex:2,
    flexDirection: 'row' ,
    alignItems: 'center', 
    justifyContent:'flex-end',
  },
  containerCarousel: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop:10,
    marginBottom:10,
  },
  thumbnailStyle: {
    resizeMode: 'contain',
    borderWidth: 1,
    height: 70,
    width: 100,
  },
  pickerStyle: {
    width:160, 
    height:20, 
    justifyContent:'flex-end', 
    alignItems:'center', 
    color:'#b2b2b2',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
