import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  View } from 'react-native'
import {
  Container,
  Text,
  Card } from 'native-base'
import { Icon } from 'react-native-elements'

const image = require('../../assets/images/banners/prescribed.jpeg')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10
  },
  banner: {
    height: 110,
    backgroundColor: '#fff',

    justifyContent: 'flex-start'
  },
  banner_image: {
    height: 112,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  options: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 285,
    height: 45,
    marginTop: 10
  }
})

export default class PrescribedScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container >
        <View>
          <View style={styles.banner}>
            <Image resizeMode='contain' style={styles.banner_image} source={image}/>
            <Icon
              iconStyle={{ marginLeft: 20, paddingTop: 11, alignSelf: 'flex-start' }}
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
            <Text style={{ paddingLeft: 4, paddingTop: 3, fontSize: 17, color: '#555555', fontWeight: 'bold' }}>Prescribed Medicines</Text>
            <View style={{ alignItems: 'center', paddingTop: 8, justifyContent: 'flex-start', marginBottom: 18 }}>
              <Card style={styles.options}>
                <Text style={{ paddingLeft: 15, fontSize: 16, color: '#555555' }}>Exclusive Brands</Text>
                <View style={{ paddingRight: 14 }}>
                  <Icon
                    size={26}
                    name='flash'
                    type='material-community'
                    color='#03a9f4'
                  />
                </View>
              </Card>
              <Card style={styles.options}>
                <Text style={{ paddingLeft: 15, fontSize: 16, color: '#555555' }}>Health Conditions</Text>
                <View style={{ paddingRight: 18 }}>
                  <Icon
                    size={26}
                    name='plus'
                    type='foundation'
                    color='#db3e00'
                  />
                </View>
              </Card>

            </View>
          </ScrollView>
        </View>
      </Container>
    )
  }
}
