import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  TouchableHighlight } from 'react-native'
import {
  Container,
  Text,
  Card } from 'native-base'
import { Icon } from 'react-native-elements'

const image = require('../../assets/images/banners/first-aid.png')
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
    height: 110,
    alignSelf: 'center',
    position: 'absolute',
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

export default class EverydayScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation
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
            <Text style={{ paddingLeft: 4, paddingTop: 3, fontSize: 17, color: '#555555', fontWeight: 'bold' }}>Everyday Care Products</Text>
            <View style={{ alignItems: 'center', paddingTop: 8, justifyContent: 'flex-start', marginBottom: 18 }}>
              <Card style={styles.options}>
                <Text style={{ paddingLeft: 15, fontSize: 16, color: '#555555' }}>First Aid</Text>
                <View style={{ paddingRight: 15 }}>
                  <Icon
                    size={26}
                    name='first-aid'
                    type='foundation'
                    color='#f44336'
                  />
                </View>
              </Card>

              <Card style={styles.options}>
                <TouchableHighlight onPress={() => navigate('WomenCareScreen')} underlayColor='#dbdbdb' >
                  <Text style={{ paddingLeft: 15, fontSize: 16, color: '#555555' }}>Women's Care</Text>
                </TouchableHighlight>
                <View style={{ paddingRight: 15 }}>
                  <Icon
                    size={26}
                    name='gender-female'
                    type='material-community'
                    color='#f78da7'
                  />
                </View>
              </Card>

              <Card style={styles.options}>
                <Text style={{ paddingLeft: 15, fontSize: 16, color: '#555555' }}>Men's Care</Text>
                <View style={{ paddingRight: 15 }}>
                  <Icon
                    size={26}
                    name='gender-male'
                    type='material-community'
                    color='#2196f3'
                  />
                </View>
              </Card>
              <Card style={styles.options}>
                <Text style={{ paddingLeft: 15, fontSize: 16, color: '#555555' }}>Family Nutrition</Text>
                <View style={{ paddingRight: 15 }}>
                  <Icon
                    size={26}
                    name='heart-pulse'
                    type='material-community'
                    color='#ff8a65'
                  />
                </View>
              </Card>
              <Card style={styles.options}>
                <Text style={{ paddingLeft: 15, fontSize: 16, color: '#555555' }}>Health Equipements</Text>
                <View style={{ paddingRight: 15 }}>
                  <Icon
                    size={26}
                    name='stethoscope'
                    type='font-awesome'
                    color='#999999'
                  />
                </View>
              </Card>
              <Card style={styles.options}>
                <Text style={{ paddingLeft: 15, fontSize: 16, color: '#555555' }}>Sexual Wellness</Text>
                <View style={{ paddingRight: 15 }}>
                  <Icon
                    size={26}
                    name='intersex'
                    type='font-awesome'
                    color='#f47373'
                  />
                </View>
              </Card>
              <Card style={styles.options}>
                <Text style={{ paddingLeft: 15, fontSize: 16, color: '#555555' }}>Gym Wellness</Text>
                <View style={{ paddingRight: 15 }}>
                  <Icon
                    size={26}
                    name='dumbbell'
                    type='material-community'
                    color='#697689'
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