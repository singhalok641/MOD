import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
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
import { Button, Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;

const images = [
    require('../assets/images/1.png'),
    require('../assets/images/2.png'),
    require('../assets/images/3.png'),
    require('../assets/images/5.png')
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
    //console.log(image);
        return (
            <View key={index}>
              <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode:'contain' }} source={image} />
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

        <Modal style={ styles.modal4 } position={"bottom"} ref={"modal4"} style={{ elevation: 10, zIndex:10}} backButtonClose={true} coverScreen={true}>
          <View style = {{ height:150 }}>
            <Card style={{ marginTop:0 ,marginLeft:0, marginRight:0 }}>
              <Icon
                iconStyle={{ alignSelf:'flex-start', marginLeft:15, marginRight:15, marginTop:20, marginBottom:10 }}
                name='cross'
                type='entypo'
                color='#000'
                size={40}
                onPress={() => this.refs.modal4.close()} />
              <Item style={{ borderColor: 'transparent', marginLeft:15, marginRight:15 }}> 
                <Input placeholder="Search medicines" placeholderTextColor={'#a8a8a8'} style={{ fontSize:30, fontWeight:'bold' }} autoFocus={true}/>
              </Item>
            </Card>
          </View>
        </Modal>
        
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
              
              <Card>
                <Button
                  onPress={() => this.refs.modal4.open()}
                  buttonStyle={{ alignItems:'flex-start', justifyContent:'flex-start'}}
                  backgroundColor={'#fff'}
                  color={'#a8a8a8'}
                  icon={{ name: 'search', color:'#4c4c4c' }}
                  title='Search any product' />
              </Card>

              <Card>
                <Button
                  buttonStyle={{ alignItems:'flex-start', justifyContent:'flex-start'}}
                  backgroundColor={'#fff'}
                  color={'#a8a8a8'}
                  icon={{name: 'file-upload', color:'#4c4c4c'}}
                  title='Upload Prescription' />
              </Card>
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
    marginBottom: 20
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
  modal4: {
    justifyContent: 'flex-start',
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