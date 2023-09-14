import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

export default function stackNavigator() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Tab" component={TabNavigator} options={{
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