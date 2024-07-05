import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './screens/Home';
import Profil from './screens/Profil';
import Pengaturan from './screens/Pengaturan';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import StartCallScreen from './screens/StartCallScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Home} 
      options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Profil" component={Profil} 
      options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Pengaturan" component={Pengaturan} 
      options={{
          tabBarLabel: 'Pengaturan',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown:false}}/>
        <Stack.Screen name="CallHistory" component={HistoryScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="StartCall" component={StartCallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App

const styles = StyleSheet.create({})