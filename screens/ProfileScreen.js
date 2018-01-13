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
  Form,
  Item as FormItem,
  Card,
  CardItem } from 'native-base';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Button, Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import {Constants} from 'expo';

const image=require('../assets/images/AS.jpg');

export default class ProfileScreen extends React.Component {
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


  render() {
    return (
      <Container>  
      	<View style={styles.container}>
          <ScrollView>
             <View style={styles.view}>
              <View>
                <Text style={styles.name}>Ankur Singh</Text>
                <Text note style={{fontSize :15}}>View and edit profile</Text>
              </View>
              
             </View>

             <List style={{paddingTop :20}}>
              <ListItem style={styles.option}>
                <View>
                  <Text style={styles.op_name}>My Prescriptions</Text>
                </View>
                  <Icon
                    name='view-list'
                    type='MaterialIcons'
                    color='#666666'
                    size={26}
                    />
               </ListItem>
               <ListItem style={styles.option}>
                <View>
                  <Text style={styles.op_name}>My Addresses</Text>
                </View>
                  <Icon
                    name='location-on'
                    type='MaterialIcons'
                    color='#666666'
                    size={26}
                    />
               </ListItem>
               <ListItem style={styles.option}>
                <View>
                  <Text style={styles.op_name}>Notifications</Text>
                </View>
                  <Icon
                    name='notifications'
                    type='MaterialIcons'
                    color='#666666'
                    size={26}
                    />
               </ListItem>
               <ListItem style={styles.option}>
                <View>
                  <Text style={styles.op_name}>Offers</Text>
                </View>
                  <Icon
                    name='local-offer'
                    type='MaterialIcons'
                    color='#666666'
                    size={26}
                    />
               </ListItem>
               <ListItem style={styles.option}>
                <View>
                  <Text style={styles.op_name}>Give us feedback</Text>
                </View>
                  <Icon
                    name='feedback'
                    type='MaterialIcons'
                    color='#666666'
                    size={26}
                    />
               </ListItem>
               <ListItem style={styles.option}>
                <View>
                  <Text style={styles.op_name}>Logout</Text>
                </View>
                  <Icon
                    name='power-settings-new'
                    type='MaterialIcons'
                    color='#666666'
                    size={26}
                    />
               </ListItem>
             </List>
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop:10,

  },
  view: {
    paddingLeft:20,
    paddingRight:20,
    flex:1,
    paddingTop:45,
    flexDirection:'row',
    alignItems : 'center',
    justifyContent : 'space-between'
	},
  name:{
    color:'#555555',
    fontSize :26,
    fontWeight : 'bold'
  },
  option:{
    flexDirection:'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  op_name:{
    fontSize:17,
    color:'#666666',
  }
});
