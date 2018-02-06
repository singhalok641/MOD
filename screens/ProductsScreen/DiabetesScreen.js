import React from 'react';
import Modal from 'react-native-modalbox';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
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
  Content, 
  Left, 
  Right,
  Card,
  CardItem } from 'native-base';
import { Button, Icon } from 'react-native-elements';

const image = require('../../assets/images/banners/diabetic.jpg');

export default class DiabetesScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };

  constructor(props) {
    super(props);
  } 

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  
  render() {
    return (
      <Container >
        <View>
          <View style={styles.banner}>
            <Image resizeMode='contain' style={styles.banner_image} source={image}/>
            <Icon
              iconStyle={{ marginLeft:20, paddingTop:11 ,alignSelf : 'flex-start'}}
              size={25}
              name='arrow-back'
              type='materialicons'
              color='#ffffff'
            />
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView style={styles.container}
          contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <Text style={{paddingLeft: 4, paddingTop:3,fontSize:17, color: '#555555', fontWeight: 'bold'}}>Diabetic Care Products</Text>
            <View style={{alignItems : 'center',paddingTop:8,justifyContent : 'flex-start', marginBottom: 18}}>
              <Card style={styles.options}>
                <Text style={{paddingLeft: 15,fontSize : 16,color: '#555555',}}>Foods and Beverages</Text>
                <View style={{paddingRight:15}}>
                <Icon
                size={26}
                name='food-variant'
                type='material-community'
                color='#2ccce4'
              />
              </View>
              </Card>
              <Card style={styles.options}>
                <Text style={{paddingLeft: 15,fontSize : 16,color: '#555555',}}>Nutrition and Supplements</Text>
                <View style={{paddingRight:15}}>
                <Icon
                size={26}
                name='food-apple'
                type='material-community'
                color='#f44336'
              />
              </View>
              </Card>
              <Card style={styles.options}>
                <Text style={{paddingLeft: 15,fontSize : 16,color: '#555555',}}>Glucose Monitors & Strips</Text>
                <View style={{paddingRight:15}}>
                <Icon
                size={26}
                name='monitor'
                type='material-community'
                color='#d2ac79'
              />
              </View>
              </Card>
              <Card style={styles.options}>
                <Text style={{paddingLeft: 15,fontSize : 16,color: '#555555',}}>Sugar Free</Text>
                <View style={{paddingRight:15}}>
                <Icon
                size={26}
                name='candycane'
                type='material-community'
                color='#ff8a65'
              />
              </View>
              </Card>
            </View>
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
  banner:{
    height:110,
    backgroundColor: '#fff',
    
    justifyContent : 'flex-start',
  },
  banner_image:{
    height :110,
    alignSelf : 'center',
    position : 'absolute',
    justifyContent : 'center'
  },
  options:{
    alignItems : 'center',
    justifyContent : 'space-between',
    flexDirection : 'row',
    width:285,
    height:45,
    marginTop:10,
  }
});
