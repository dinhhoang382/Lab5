import React,{useContext} from 'react';
import {View, StyleSheet,Text, Pressable} from 'react-native';
import { BackHandler } from 'react-native';
import auth from '@react-native-firebase/auth';
import {UserContext} from '../context/UseContext';

const Logout = ({navigation}) => {
    let {logoutUser} = useContext(UserContext);
    const handleLogout = () =>{
        logoutUser();
        navigation.navigate("Login");
        // BackHandler.exitApp();
    }
    return (
        <View style={styles.container}>
               <Pressable 
                style={{backgroundColor: "red", 
                alignItems:'center',
                padding: 15, 
                borderRadius:10, 
                width:150
               }}
    
               onPress={handleLogout}>
                  <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>Logout</Text>
                </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
   
    text:{
        color:'white',
        fontWeight:'bold',
    }
})

export default Logout;
