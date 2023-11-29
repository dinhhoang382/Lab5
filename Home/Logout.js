import React from 'react';
import {View, StyleSheet,Text, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';
const Logout = () => {
    return (
        <View style={styles.container}>
               <Pressable 
                style={{backgroundColor: "red", 
                alignItems:'center',
                padding: 15, 
                borderRadius:10, 
                width:150
               }}
    
            onPress={()=> auth().signOut().then(() => navigation.navigate('Login'))}>
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
