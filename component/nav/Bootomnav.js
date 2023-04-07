import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
export default function Bootomnav() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
        
        screenOptions={({ route }) => ({

        
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home-sharp'
                  : 'home-outline';
              } else if (route.name === 'NewPost') {
                iconName = focused ? 'ios-newspaper-sharp' : 'newspaper-outline';
              } else if (route.name === 'Music') {
                iconName = focused ? 'ios-musical-notes-sharp' : 'musical-notes-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-settings-sharp' : 'settings-outline';
              }
  
              return <Icon name={iconName} size={26} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'grey',
          })}
        
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
          
        </Tab.Navigator>
  )
}