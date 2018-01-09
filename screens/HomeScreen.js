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
import Modal from 'react-native-modalbox';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;

const images = [
    require('../assets/images/1.png'),
    require('../assets/images/2.png'),
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
    return (
      <Container>  
        <Header style={{  backgroundColor:'#fff' }}>
          <View style={ styles.headerViewStyle }>
            <TouchableHighlight onPress={() => this.refs.modal6.open()} underlayColor='#cccccc' >
              <View style={ styles.addressViewStyle }>
                <View style={{ flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start',paddingTop: 5 }}>
                  <Text style={{ fontSize: 17 ,fontWeight: 'bold' , color: '#555555'}} >Indirapuram</Text>
                  {<Icon onPress={() => this.refs.modal6.open()} name={'keyboard-arrow-down'} type='MaterialIcons' size={25} style={{ paddingLeft: 5}} color={"#03a9f4"}/> }             
                </View>
                <View>
                  <Text style={{fontSize: 13}} onPress={() => this.refs.modal6.open()} note numberOfLines ={1} >697-A, Nyay Khand 1, Indirapuram, Ghaziabad</Text>        
                </View>
              </View>
            </TouchableHighlight>
            <View style={ styles.filterViewStyle }>
              <Text style = {{fontWeight:'bold',fontSize: 13,color: '#555555'}}>FILTER</Text>
              {<Icon name={'sort'} type='MaterialIcons' size={17} style={{ paddingRight: 5}} color={"#03a9f4"}/> }
            </View>
          </View>
        </Header>

        <Modal style={ styles.modal6 } position={"top"} ref={"modal6"} backButtonClose={true} coverScreen={true} animationDuration={300} backdropPressToClose={false}>
          <View style = {{ height:150 }}>
              <Card style={{ marginTop:0 ,marginLeft:0, marginRight:0 }}>
                <Icon
                  iconStyle={{ alignSelf:'flex-start', marginLeft:17, marginRight:15, marginTop:20, marginBottom:10 }}
                  name='arrow-back'
                  type='MaterialIcons'
                  color='#555555'
                  size={25}
                  onPress={() => this.refs.modal6.close()} />
                <View style = {styles.RectangleShapeView}>
                  <Text style = {{paddingTop: 0 ,fontSize:12, color: '#03a9f4'}}>SET DELIVERY LOCATION</Text>
                   <Input placeholder="Search your city, area..." placeholderTextColor={'#a8a8a8'}style={{ fontSize:19, fontWeight: 'bold',paddingLeft: 0, paddingBottom: 0 }} />
                </View>
              </Card>
          </View>
        </Modal>  

        <Modal style={ styles.modal4 } position={"top"} ref={"modal4"} backButtonClose={true} coverScreen={true} animationDuration={300} backdropPressToClose={false}>
          <View style = {{ height:150 }}>
            <Card style={{ marginTop:0 ,marginLeft:0, marginRight:0 }}>
              <Icon
                iconStyle={{ alignSelf:'flex-start', marginLeft:17, marginRight:15, marginTop:20, marginBottom:10 }}
                name='clear'
                type='MaterialIcons'
                color='#555555'
                size={25}
                onPress={() => this.refs.modal4.close()} />
              <Item style={{ borderColor: 'transparent', marginLeft:15, marginRight:15 }}> 
                <Input placeholder="Type any product" placeholderTextColor={'#a8a8a8'} style={{ fontSize:25, fontWeight:'bold' }} autoFocus={true}/>
              </Item>
            </Card>
          </View>
        </Modal>

        <Modal style={ styles.modal5 } position={"top"} ref={"modal5"} backButtonClose={true} coverScreen={true} animationDuration={300} backdropPressToClose={false}>
          <View style = {{ height:70 }}>
            <Card style={{ marginTop:0 ,marginLeft:0, marginRight:0 ,flexDirection : 'row',alignItems : 'center'}}>
              <Icon
                iconStyle={{ marginLeft:17, marginRight:15, marginTop:20, marginBottom:10 }}
                name='arrow-back'
                type='MaterialIcons'
                color='#555555'
                size={25}
                onPress={() => this.refs.modal5.close()} />
              <Text style = {{paddingTop: 8 ,fontSize:20, color: '#555555', fontWeight: 'bold'}}>Upload Prescription</Text>
            </Card>
          </View>
          <Text style = {{paddingTop: 8 ,paddingLeft: 33, fontSize:14,color: '#03a9f4'}}>Choose an option to upload</Text>
          <View style = {styles.SquaresShapeView}>
            <Container style={{paddingLeft: 0, flexDirection: 'column' }}>
              <Icon
                iconStyle={{ alignSelf:'center', marginLeft:17, marginRight:15, marginTop:20, marginBottom:0}}
                name='camera-alt'
                type='MaterialIcons'
                color='#808080'
                size={39}/>
              <Text style={{textAlign:'center'  ,fontSize: 14, color: '#808080'}}>Camera</Text>  
            </Container>

            <Container style={{paddingLeft: 0,flexDirection: 'column' }}>
              <Icon
                iconStyle={{ alignSelf:'center', marginLeft:17, marginRight:15, marginTop:20, marginBottom:0}}
                name='photo-size-select-actual'
                type='MaterialIcons'
                color='#808080'
                size={39} />
              <Text style={{textAlign:'center'  ,fontSize: 14, color: '#808080'}}>Gallery</Text>  
            </Container>

            <Container style={{paddingRight: 0,flexDirection: 'column' }}>
              <Icon
                iconStyle={{ alignSelf:'center', marginLeft:17, marginRight:15, marginTop:20, marginBottom:0}}
                name='view-list'
                type='MaterialIcons'
                color='#808080'
                size={39}/>
              <Text style={{textAlign:'center'  ,fontSize: 14, color: '#808080'}}>Prescriptions</Text>  
            </Container>
          </View>
          <Text style = {{paddingTop: 10 ,paddingLeft: 33, fontSize:14,color: '#03a9f4'}}>Attached Prescriptions</Text>
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
                  onPress={() => this.refs.modal4.open()}
                  buttonStyle={{ alignItems:'flex-start', justifyContent:'flex-start'}}
                  backgroundColor={'#fff'}
                  color={'#a8a8a8'}
                  icon={{ name: 'search', color:'#555555' }}
                  title='Search any product' />
              </Card>
              <Card>
                <Button
                  onPress={() => this.refs.modal5.open()}
                  buttonStyle={{ alignItems:'flex-start', justifyContent:'flex-start'}}
                  backgroundColor={'#fff'}
                  color={'#a8a8a8'}
                  icon={{name: 'file-upload', color:'#555555'}}
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
    paddingTop: 3,
    paddingLeft: 10
  },
  filterViewStyle:{
    flex:2,
    flexDirection: 'row' ,
    alignItems: 'center', 
    justifyContent:'flex-end',
    paddingRight: 10
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
    width: 317,
    height: 95, 
    flexDirection: 'row' ,
    borderWidth: 1,
    borderColor: '#a8a8a8',
    marginLeft: 22,
    marginTop: 6,
    justifyContent: 'space-between',
    borderRadius: 2
  }
});
