import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, Text } from 'react-native'; // Import TouchableOpacity and Text

import Home from '../screens/Home';
import Tab from './nestedTabNavigator';
import Reports from '../screens/Reports';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={Tab}
        options={({ navigation }) => ({
          headerShown:false,
          title: 'Expenses',
          headerStyle: {
            backgroundColor: '#A35D6A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        })}/>

        <Stack.Screen
        name="Reports"
        component={Reports}
        options={({ navigation }) => ({
          title: 'Account',
          headerStyle: {
            backgroundColor: '#A35D6A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        })}
      />
    </Stack.Navigator>
  );
}
