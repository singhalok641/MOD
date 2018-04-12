import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView
} from 'react-native'
import {
  Container,
  Item,
  Input,
  Text,
  Form,
  Label } from 'native-base'
import { Button, Icon } from 'react-native-elements'
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0
  },
  mapscontainer: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    height: 220,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  maps: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  account: {
    color: '#555555',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 6
  },
  modalContentAddress: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)'
  }
})

export default class SingleProductScreen extends React.Component {
  static navigationOptions = {
    header: null
  }


  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <View style={styles.mapscontainer}>
          <MapView style={styles.maps}
            region={{
              latitude: 30.352032,
              longitude: 76.360535,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}>
            <MapView.Marker
              coordinate={{
                latitude: 30.352032,
                longitude: 76.360535
              }}
              title={'Move pin to adjust'}
            />
          </MapView>
        </View>
        <View style={ styles.container }>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingLeft: 15, paddingRight: 15, paddingBottom: 10, backgroundColor: '#e5f6fd' }}>
            <Icon
              style={{ marginLeft: 17, paddingRight: 6 }}
              name='arrow-back'
              type='MaterialIcons'
              color='#555555'
              size={20}
            />
            <Text style={ styles.account }>Set Delivery Location</Text>
          </View>
          <ScrollView style={{ flex: 1, flexDirection: 'column', paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
            <View style={{ flex: 1, flexDirection: 'column', paddingTop: 5, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
            <KeyboardAvoidingView
              style={ styles.modalContentAddress }
              behavior='padding'>
              <Form>
                <Item stackedLabel>
                  <Label style={{ fontSize: 12, color: '#555555' }}>LOCATION</Label>
                  <Input
                    keyboardType= 'default'
                    returnKeyType='next'
                    autoFocus={true}
                  />
                </Item>
                <Item stackedLabel>
                  <Label style={{ fontSize: 12, color: '#555555' }}>HOUSE/FLAT NO.</Label>
                  <Input
                    keyboardType = 'default'
                    returnKeyType='next'
                    autoFocus={true}
                  />
                </Item>
                <Item stackedLabel>
                  <Label style={{ fontSize: 12, color: '#555555' }}>LANDMARK</Label>
                  <Input
                    keyboardType = 'default'
                    returnKeyType='next'
                    autoFocus={true}
                  />
                </Item>
              </Form>
            </KeyboardAvoidingView>
            <View style={{ paddingLeft: 15, paddingTop: 5 }}>
              <Label style={{ paddingBottom: 10, paddingTop: 5, fontSize: 12, color: '#555555' }}>SAVE AS</Label>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                  <Icon
                    name='home'
                    type='foundation'
                    color='#808080'
                    size={19}
                  />
                  <Text style={{ paddingLeft: 5, fontSize: 18, color: '#808080' }}>Home</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                  <Icon
                    name='work'
                    type='material'
                    color='#808080'
                    size={19}
                  />
                  <Text style={{ paddingLeft: 5, fontSize: 18, color: '#808080' }}>Work</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                  <Icon
                    name='location-on'
                    type='material'
                    color='#808080'
                    size={19}
                  />
                  <Text style={{ paddingLeft: 5, fontSize: 18, color: '#808080' }}>Other</Text>
                </View>
              </View>
            </View>
            </View>
          </ScrollView>
          <Button
            large
            containerViewStyle={{ width: '100%', marginLeft: 0 }}
            buttonStyle={{ alignItems: 'center', justifyContent: 'center' }}
            backgroundColor={'#03a9f4'}
            title={`ADD ADDRESS`}
            fontWeight={'bold'}
            fontSize = {17}
          />
        </View>
      </Container>
    )
  }
}
