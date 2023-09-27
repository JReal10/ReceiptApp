import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons from the correct path

import Reports from '../screens/Reports';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const NestedTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: 'Expenses',
          headerStyle: {
            backgroundColor: '#A35D6A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: { display: 'none' },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // Define the action when the button is pressed
                // For example, you can navigate to another screen
                // Replace 'YourScreenName' with the name of the screen you want to navigate to
                navigation.navigate('Reports');
              }}
            >
              {/* Use Ionicons with the name "ellipsis-horizontal-sharp" */}
              <Ionicons name="ellipsis-horizontal-sharp" size={24} style = {{marginRight: 10,}} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default NestedTabNavigator;

