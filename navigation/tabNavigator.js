import { Dimensions } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Details from '../screens/Details';
import Reports from '../screens/Reports';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

//create a navigation tab for a screen: HomeScreen, BookingPage1 and ProfilePage

function TabNavigator() {

  return (
    <Tab.Navigator 
    screenOptions= 
    {{
      tabBarStyle:
      {
        height:height * 0.11,
        backgroundColor: '#fff',
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius:5,
      },
      //tabBarInactiveTintColor:colors.secondary_green,
      //tabBarActiveTintColor:colors.secondary_green,
      headerShown: false,

    }}>

      <Tab.Screen name="Expenses" component={Home} options = {{
          tabBarIcon: ()=> <Ionicons size = {height * 0.035} name = "receipt"></Ionicons>,
                  
      }}/>
      <Tab.Screen name="Add" component={Details} options = {{
        tabBarIcon: ()=> <Ionicons name = "add-circle-sharp" size = {height * 0.05}></Ionicons>,
      }}/>
      <Tab.Screen name="Account" component={Reports} options = {{
        tabBarIcon: ()=> <Ionicons name = "person-sharp" size = {height * 0.035}></Ionicons>
      }}/>
    </Tab.Navigator>
  );
}

export default TabNavigator;