import React, { Component } from 'react'
import {
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const swiperStyles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },


  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1,
      resizeMode:'cover'
  }
}

export default class extends Component {
  render () {
    return (
        <Swiper  height={170} horizontal={true} autoplay>
          <View style={swiperStyles.slide}>
            <Image style={swiperStyles.image} source={require('../../../images/1.jpg')} />
          </View>
          <View style={swiperStyles.slide}>
            <Image style={swiperStyles.image} source={require('../../../images/2.jpg')} />
          </View>
          <View style={swiperStyles.slide}>
            <Image style={swiperStyles.image} source={require('../../../images/3.jpg')} />
          </View>
        </Swiper>

    )
  }
}
