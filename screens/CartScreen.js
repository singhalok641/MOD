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
import { Button, Icon } from 'react-native-elements';

const image = require('../assets/images/v.jpeg');

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

  render() {
    return (
      <Container>  
      	<Header style={{  backgroundColor:'#fff' }}>
          <View style={ styles.headerViewStyle }>
            <View style={{ marginTop:0 ,marginLeft:0, marginRight:0 , flexDirection: 'row', alignItems: 'center'  }}>

                <View style = {styles.HeaderShapeView}>
                  <Text style = {{paddingTop: 0 ,fontSize:20, color: '#555555', fontWeight: 'bold' }}>Cart</Text>
                   
                    <Text style={{ color:'#03a9f4', fontSize:13, fontWeight: 'normal', paddingLeft: 0, paddingBottom: 0, }} >2 items, To Pay: ₹460</Text>
                  
                </View>
              </View>
          </View>
        </Header>

        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View>
            	<Text style={{fontSize:13,color :'#03a9f4'}}>Items requiring prescriptions (1)</Text>
            	<List>
            		<ListItem>
                	<View style={styles.view}>
                    <View style={styles.product}>
                    	<Image resizeMode="contain" style={styles.product} source={image}/>                     		
                    </View>
                    <View style={{ flexDirection:'row',justifyContent: 'space-between',alignItems:'flex-start' }}>
                    	<Text style={styles.pro_name}>VWash Plus Intimate Hygiene Wash</Text>
                      <Text style={styles.pro_name}>₹ 300</Text>
                    </View>
	                  </View>
                  	<View style={styles.view}>
                      <Card style={styles.control}>
                      </Card>
                    </View>
                </ListItem>
					    </List>
            </View>
            <View>
            	<Text style={{fontSize:13,color :'#03a9f4'}}>Items not requiring prescriptions (1)</Text>
            	<List>
            		
            	</List>
            </View>  
          </ScrollView>
        </View>
        <Button 
          containerViewStyle={{width: '100%',marginLeft :0}}
          buttonStyle={{ alignItems:'center', justifyContent:'center'}}
          backgroundColor={'#03a9f4'} 
          title='CONFIRM YOUR ORDER' 
          />
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
  
  HeaderShapeView:{
    width: 282,
    height: 47, 
    borderWidth: 0,
    borderColor: '#a8a8a8',
    paddingLeft: 10,
    paddingTop: 2,
    marginLeft: 0,
    marginTop: 0,
    borderRadius: 1
  },
  view: {
    flex:1,
    flexDirection:'row',
    alignItems : 'flex-start' 
	},
  product:{
	
	width: 60, 
	height: 60,
    alignItems: 'stretch' 
	},
  pro_name:{
	fontSize :13
	},
  descrip:{
  	textAlign: 'justify',
  	justifyContent: 'flex-start' , 
  	paddingTop: 19, 
	fontSize :12
	},
  quantity:{

	},
});
