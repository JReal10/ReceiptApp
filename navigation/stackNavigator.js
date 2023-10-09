import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tab from './nestedTabNavigator';
import Reports from '../screens/Reports';
import Camera from '../screens/Camera';

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
        name="Camera"
        component={Camera}
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
