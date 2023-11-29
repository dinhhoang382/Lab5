import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import Home from './Home/Home';
import FirestoreCRUD from './Home/CRUD';
import Service from './Home/Service';
import Router from './Router';
import AddService from './Home/AddService';
import DetailsService from './Home/DetailsService';
import { AuthProvider } from './context/UseContext'

const Stack = createStackNavigator();

const App = () => {
  return (
      <AuthProvider>
        <NavigationContainer independent={true}>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddService" component={AddService} options={{ headerShown: false }}/> 
        <Stack.Screen name="Router" component={Router} options={{ headerShown: false }}/> 

      </Stack.Navigator>
      </NavigationContainer>
      </AuthProvider>
  );
}

const styles = StyleSheet.create({})

export default App;
