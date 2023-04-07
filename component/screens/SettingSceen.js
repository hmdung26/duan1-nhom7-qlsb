import { View, Text, Button } from 'react-native'
import React from 'react'
import Login from '../auth/Login'

export default function SettingSceen({navigation}) {
  return (
    <View>
        <Button onPress={navigation.navigate('Login')}>Logout</Button>
    </View>
  )
}