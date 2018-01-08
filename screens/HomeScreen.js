import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
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
                {/*<Ionicons name={'md-arrow-dropdown'} size={32} style={{ paddingLeft: 5}} color={"
              "}/> */}             
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

        <Modal style={ styles.modal4 } position={'top'} ref={"modal4"} backButtonClose={true} coverScreen={true} animationDuration={300}>
          <View style = {{ height:130 }}>
            <Card style={{ marginTop:0 ,marginLeft:0, marginRight:0 }}>
              <Icon
                iconStyle={{ alignSelf:'flex-start', marginLeft:15, marginRight:15, marginTop:20, marginBottom:10 }}
                name='cross'
                type='entypo'
                color='#a8a8a8'
                size={30}
                onPress={() => this.refs.modal4.close()} />
              <Item style={{ borderColor: 'transparent', marginLeft:15, marginRight:15 }}> 
                <Input placeholder="Search any product" placeholderTextColor={'#a8a8a8'} style={{ fontSize:25, fontWeight:'bold', color:'#4c4c4c' }} autoFocus={true}/>
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
  modal4: {
    justifyContent: 'flex-start',
  },
});
