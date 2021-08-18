import React from 'react';
import { enableScreens } from 'react-native-screens';
import HomeScreen from './Screens/HomeScreen'
import NextScreen from './Screens/NextScreen';

enableScreens()

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack= createNativeStackNavigator()

export default function App() {
  return(
    <NavigationContainer fallback={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='NextScreen' component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}