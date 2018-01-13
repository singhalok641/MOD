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
  AsyncStorage,
  Animated, 
  Keyboard, 
  KeyboardAvoidingView
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
  CardItem,
  Label } from 'native-base';
import { Button, Icon,  } from 'react-native-elements';
import Modal from "react-native-modal";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: null,
      isEnabled: false,
      number:'',
      email:'',
      name:'',
      password:'',
    };
  }

  _renderLoginModalContent = () => (
      <View style={ styles.modalContentLogin }>
        {/*<Text>Hello!</Text>
        {this._renderButton('Close', () => this.setState({ visibleModal: null }))}*/}
        <Text style={ styles.account }>LOGIN</Text>
        <Text note>Enter your phone number to proceed</Text>
        <View style={{ marginTop:20 }}>
          <Text note>PHONE NUMBER</Text>
          <Item>
            <Input 
              keyboardType = 'numeric' 
              returnKeyType="next"
              autoFocus={true} 
              fontWeight={`bold`}
              maxLength = {10}
              onChangeText={(number) => this.setState({number})}
              //onChangeText={() =>  this.setState({isEnabled: true})}
              //value={this.state.store_id} 
              />
          </Item>
          <Button
            raised
            //disabled={!this.state.isEnabled}
            containerViewStyle={{ marginTop:20, marginLeft:0, marginRight:0 }}
            buttonStyle={{ backgroundColor: '#03a9f4'}}
            textStyle={{textAlign: 'center'}}
            fontWeight={'bold'}
            title={`ENTER PHONE NUMBER`}
            onPress={() => this.setState({ visibleModal: 4 })}
            />
        </View>
      </View>
  )

  _renderSignUpModalContent = () => (
      <View style={ styles.modalContentSignUp }>
        {/*<Text>Hello!</Text>
        {this._renderButton('Close', () => this.setState({ visibleModal: null }))}*/}
        <View style={{ paddingTop:40, paddingLeft:15, paddingRight:15, paddingBottom:20, backgroundColor:'#e5f6fd' }}>
          <Text style={ styles.account }>SIGN UP</Text>
          <Text note>Create an account with the new phone number</Text>
        </View>
        <ScrollView style={{flex:1, flexDirection:'column', paddingTop:0, paddingLeft:0, paddingRight:0, paddingBottom:40 }}>
          <View style={{flex:1, flexDirection:'column', paddingTop:20, paddingLeft:15, paddingRight:15, paddingBottom:40 }}>
            {/*<Text note>PHONE NUMBER</Text>*/}
            <KeyboardAvoidingView
              style={ styles.modalContentSignUp }
              behavior="padding">
              <Form>
                <Item floatingLabel>
                  <Label>PHONE NUMBER</Label>
                  <Input 
                    keyboardType = 'numeric'
                    returnKeyType="next"
                    //autoFocus={true} 
                    fontWeight={`bold`}
                    maxLength = {10}
                    onChangeText={(number) => this.setState({number})}
                    //onChangeText={() =>  this.setState({isEnabled: true})}
                    //value={this.state.store_id} 
                    />
                </Item>
                <Item floatingLabel>
                  <Label>EMAIL ADDRESS</Label>
                  <Input 
                    //keyboardType = 'numeric' 
                    returnKeyType="next"
                    //autoFocus={true} 
                    fontWeight={`bold`}
                    maxLength = {10}
                    onChangeText={(number) => this.setState({number})}
                    //onChangeText={() =>  this.setState({isEnabled: true})}
                    //value={this.state.store_id} 
                    />
                </Item>
                <Item floatingLabel>
                  <Label>NAME</Label>
                  <Input 
                    //keyboardType = 'numeric' 
                    returnKeyType="next"
                    //autoFocus={true} 
                    fontWeight={`bold`}
                    maxLength = {10}
                    onChangeText={(number) => this.setState({number})}
                    //onChangeText={() =>  this.setState({isEnabled: true})}
                    //value={this.state.store_id} 
                    />
                </Item>
                <Item floatingLabel>
                  <Label>PASSWORD</Label>
                  <Input 
                    //keyboardType = 'numeric' 
                    returnKeyType="next"
                    //autoFocus={true} 
                    fontWeight={`bold`}
                    maxLength = {10}
                    onChangeText={(number) => this.setState({number})}
                    //onChangeText={() =>  this.setState({isEnabled: true})}
                    //value={this.state.store_id} 
                    />
                </Item>
              </Form>
              
            </KeyboardAvoidingView>
            
          </View>
        </ScrollView>
        <Button
                raised
                large
                //disabled={!this.state.isEnabled}
                containerViewStyle={{ marginTop:20, marginLeft:0, marginRight:0 }}
                buttonStyle={{ backgroundColor: '#03a9f4'}}
                textStyle={{textAlign: 'center'}}
                fontWeight={'bold'}
                title={`SIGN UP`}
                onPress={() => this.setState({ visibleModal: 4 })}
              />
      </View>
    
  )

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  )

  /*componentDidMount = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      console.log(user);
      if(token!== null) {
        this.props.navigation.dispatch(resetActionMain);
      }
      this.setState({
          isLoading: false
        }); 
    }
    catch (error) {
      alert(error);
    }
  }*/

  render() {
    
    /*if(this.state.number == 10){
      console.log('done');
      this.setState({
        isEnabled:true,
      });
    }
    
    console.log(this.state.number);*/

    return (
      <Container style={ styles.container1 } > 
        <View style={ styles.coverImageContainer }>
          <Image resizeMode='contain' source={require('../assets/images/preview.png')} style={ styles.cover } />
        </View>
        <View style={{ flex: 1, backgroundColor: '#fff', marginLeft: 15, marginRight: 15, marginTop:20 }}>
          <View style={{ flex: 1, flexDirection:'column' }}>
            <Text style={ styles.account }>ACCOUNT</Text>
            <Text note>Login/Create account quickly to manage orders</Text>
            <Button
              raised
              containerViewStyle={{ marginTop:20, marginLeft:0, marginRight:0 }}
              buttonStyle={{ backgroundColor: '#03a9f4'}}
              textStyle={{textAlign: 'center'}}
              fontWeight={'bold'}
              title={`LOGIN`}
              onPress={() => this.setState({ visibleModal: 5 })}
            />
            <List style={{ marginTop: 20 }}>
              <ListItem style={styles.option}>
                <View>
                  <Text style={styles.op_name}>Offers</Text>
                </View>
                  <Icon
                    name='local-offer'
                    type='MaterialIcons'
                    color='#666666'
                    size={28}
                    />
              </ListItem>
              <ListItem style={styles.option}>
                <View>
                  <Text style={styles.op_name}>Send Feedback</Text>
                </View>
                  <Icon
                    name='email'
                    type='MaterialIcons'
                    color='#666666'
                    size={28}
                    />
              </ListItem>
            </List>
          </View>
        </View>

        <Modal 
          isVisible={ this.state.visibleModal === 5 } 
          style={ styles.bottomModalLogin } 
          backdropOpacity={0} 
          onBackButtonPress={() => this.setState({ visibleModal: null })}
          onBackdropPress={() => this.setState({ visibleModal: null })}
          animationOut={ 'slideOutRight' }
          >
          {this._renderLoginModalContent()}
        </Modal>

        <Modal 
          isVisible={this.state.visibleModal === 4} 
          style={ styles.bottomModalSignUp } 
          backdropOpacity={0} 
          onBackButtonPress={() => this.setState({ visibleModal: null })}
          onBackdropPress={() => this.setState({ visibleModal: null })}
          animationOut={ 'slideOutRight' }
          >
          {this._renderSignUpModalContent()}
        </Modal>
        
        {/*<View style={styles.container2}>
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
        </View>*/}
	  </Container>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop:10,
  },
  cover:{ 
    flex:1,  
    width:null, 
    height:null 
  },
  coverImageContainer:{
    flex: 1, 
    flexDirection:'column', 
    alignItems: 'stretch'
  },
  account:{
    color:'#555555',
    fontSize :20,
    fontWeight : 'bold'
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
  },
  bottomModalLogin: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomModalSignUp: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContentLogin: {
    flex: 0.5,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 22,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    paddingLeft: 15, 
    paddingRight: 15, 
    paddingTop:20

  },
  modalContentSignUp: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});