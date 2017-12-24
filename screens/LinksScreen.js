import React from 'react';
import Modal from 'react-native-modalbox';
import Slider from 'react-native-slider';
import {
  AppRegistry,
  Text,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TextInput
} from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import {Container, Card, CardItem} from 'native-base';


var screen = Dimensions.get('window');

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };

  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  renderList() {
    var list = [];

    for (var i=0;i<50;i++) {
      list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
    }

    return list;
}

  render() {
    return (
      <Container>
      <View style={styles.container}>
        <Button onPress={() => this.refs.modal4.open()} style={styles.btn}>Position bottom + backdrop + slider</Button>
        {/*<Modal
          style={[styles.modal, styles.modal1]}
          ref={"modal1"}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}>
            <Text style={styles.text}>Basic modal</Text>
            <Button onPress={() => this.setState({swipeToClose: !this.state.swipeToClose})} style={styles.btn}>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Button>
        </Modal>

        <Modal style={[styles.modal, styles.modal2]} backdrop={false}  position={"top"} ref={"modal2"}>
          <Text style={[styles.text, {color: "white"}]}>Modal on top</Text>
        </Modal>

        <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
          <Text style={styles.text}>Modal centered</Text>
          <Button onPress={() => this.setState({isDisabled: !this.state.isDisabled})} style={styles.btn}>Disable ({this.state.isDisabled ? "true" : "false"})</Button>
        </Modal>*/}

        <Modal style={ styles.modal4 } position={"bottom"} ref={"modal4"}>
        <View style = {{ height:150 }}>
          <Card style={{ marginTop:0 ,marginLeft:0, marginRight:0 }}>
            <Button
              large
              buttonStyle={{ justifyContent: 'flex-end', alignSelf:'flex-end' }}
              backgroundColor={'#fff'}
              color={'#a8a8a8'}
              icon={{ type: 'entypo', name:'cross', color:'#4c4c4c', size:35 }} />
            {/*<SearchBar
              large
              lightTheme
              containerStyle={{ backgroundColor:"#fff"}}
              inputStyle={{ backgroundColor:'#fff', color:'#4c4c4c' }}
              placeholder='Search any product' />*/}
           </Card> 
          </View>
        </Modal>

        {/*<Modal isOpen={this.state.isOpen} onClosed={() => this.setState({isOpen: false})} style={[styles.modal, styles.modal4]} position={"center"} backdropContent={BContent}>
          <Text style={styles.text}>Modal with backdrop content</Text>
        </Modal>*/}

        {/*<Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal6"} swipeArea={20}>
          <ScrollView>
            <View style={{width: screen.width, paddingLeft: 10}}>
              {this.renderList()}
            </View>
          </ScrollView>
        </Modal>

        <Modal ref={"modal7"} style={ styles.modal4 } position={"center"}>
          <View>
            <TextInput style={{height: 50, width: 200, backgroundColor: '#DDDDDD'}}/>
          </View>
        </Modal>*/}
      </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    justifyContent: 'flex-start',
  },

  btn: {
    margin: 10,
    backgroundColor: "#000",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
}
});
