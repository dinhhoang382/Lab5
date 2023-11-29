import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import Home from './Home/Home';

import Service from './Home/Service';
import AddService from './Home/AddService';
import DetailService from './Home/DetailsService';
import EditService from './Home/EditService';
import Logout from './Home/Logout';
import { AuthProvider } from './context/UseContext';
const Stack = createStackNavigator();

const Router = ({navigation}) => {
  return (
    
    <AuthProvider>
    <NavigationContainer independent={true}>
      
    <Stack.Navigator> 
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/> 
    <Stack.Screen name="Service" component={Service} />  
    <Stack.Screen name="AddService" component={AddService}/> 
    <Stack.Screen name="DetailsService" component={DetailService}/> 
    <Stack.Screen name="EditService" component={EditService}/> 
    <Stack.Screen name="Logout" component={Logout}/> 

    <Stack.Screen name="Login" component={Login}/> 
  </Stack.Navigator> 
  </NavigationContainer>
  </AuthProvider>


  );
}

const styles = StyleSheet.create({})

export default Router;
