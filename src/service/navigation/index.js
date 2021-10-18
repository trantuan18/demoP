import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@src/screens/home';
import Home1 from '@src/screens/home1';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home1" component={Home1} />
    </Tab.Navigator>
  )
}
const Stack = createNativeStackNavigator()

function NavigationApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={TabNavigator} />
        {/* <Stack.Screen name="Home1" component={Home1} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationApp;