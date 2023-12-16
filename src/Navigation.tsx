import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import DrawingScreen from './components/DrawingScreen'

const Navigation = () => {
    const Stack=createNativeStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='home' component={Home}/>
    <Stack.Screen  name='draw' component={DrawingScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation