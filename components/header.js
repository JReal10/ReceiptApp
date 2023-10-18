import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const header = () => {
  return (
    <View style = {{height: windowHeight * 0.05, width: windowWidth}}>
      <Text style = {{alignItems:'center' }}>header</Text>
    </View>
  )
}

export default header