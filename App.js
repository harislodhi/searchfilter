import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './Screens/search';
import Home from './Screens/home';
import Addnew from './Screens/addnew';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen options={{ headerShown: false }} name="addnew" component={Addnew} />
     <Stack.Screen options={{ headerShown: false }} name="search" component={Search} />
     <Stack.Screen options={{ headerShown: false }} name="home" component={Home} />
    </Stack.Navigator>
 </NavigationContainer>
);
};
export default App

const styles = StyleSheet.create({

})