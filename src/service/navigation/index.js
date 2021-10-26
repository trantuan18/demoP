import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBar from '@src/components/tabBar'
import Home from '@src/screens/home';
import Home1 from '@src/screens/home1';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
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
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="HomeScreen" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationApp;