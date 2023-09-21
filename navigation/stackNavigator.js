import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from '../screens/Home'; 

const Stack = createNativeStackNavigator();

export default function stackNavigator() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Tab" component={Home} options={{
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