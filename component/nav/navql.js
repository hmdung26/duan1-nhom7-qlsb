import { StyleSheet, Text, View, TouchableOpacity, TextInput, Font } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import SignUp from '../auth/SignUp';
import Login from '../auth/Login';
import Bootomnav from './Bootomnav';
const Stack = createNativeStackNavigator();

function Navql() {

    
    return (
        
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Bootomnav} />
                <Stack.Screen name="Sign Up" component={SignUp} />
                {/* <Stack.Screen name="Logout" component={Login} /> */}
                {/* <Stack.Screen name="Comment" component={CommentScreen} /> */}
                {/* <Stack.Screen name="Posts" component={PostScreen} /> */}
                {/* <Stack.Screen name="Update" component={UpdatePost} /> */}
            </Stack.Navigator>
        
    )
}
const MainNav = () => {
    return(<NavigationContainer>
        <Navql/>
    </NavigationContainer>)
}
export default MainNav;