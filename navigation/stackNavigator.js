import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import tabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

export default function stackNavigator() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{
      title: 'Expenses',
      headerStyle:{
        backgroundColor: '#A35D6A',
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight:'bold',
      }
    }}/>
  </Stack.Navigator>
  )
}