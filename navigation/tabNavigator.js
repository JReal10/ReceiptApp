import { Dimensions } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

//create a navigation tab for a screen: HomeScreen, BookingPage1 and ProfilePage

function tabNavigator() {

  return (
    <Tab.Navigator 
    screenOptions= 
    {{
      tabBarStyle:
      {
        height:height * 0.11,
        //backgroundColor: colors.text_white,
        elevation: 0,
        position: 'absolute',
        borderRadius:15,
      },
      //tabBarInactiveTintColor:colors.secondary_green,
      //tabBarActiveTintColor:colors.secondary_green,
      tabBarShowLabel: false,

    }}>

      <Tab.Screen name="Home" component={Home} options = {{
        tabBarIcon: () => <Entypo name = "home" size = {height * 0.04}/>,
        headerShown: false,
      }}/>

      <Tab.Screen name="Profile" component={Profilepage} 
      options = {{
        tabBarIcon: () => <MaterialCommunityIcons name = "account" size = {height * 0.05}/>,
        headerShown: false,
        }}/>
    </Tab.Navigator>
  );
}

export default tabNavigator;