import React, { useState } from 'react';
import { View, StyleSheet, Alert, Pressable, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';

const adminUser = {
    uid: '123',
    email: 'thangpy2k2@gmail.com',
    isAdmin: true,
  };

firestore().collection('users').doc(adminUser.uid).set(adminUser);

const Login = ({navigation}) => {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [showPassword, setShowPassword] = useState(false);
    
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    const handleLogin = () => {
    
        auth()
            .signInWithEmailAndPassword(email, pass)
            .then(() => {
                navigation.navigate("Router")
               
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                // console.error(error);
            });
       
    }

    return (
        <View style={{flex:1,justifyContent:'center', margin:10, borderRadius:20}}>
           
           <Text style={{color: 'red', fontSize: 25, fontWeight: 'bold',alignSelf:'center'}}>TRUNG THANG</Text>
               
            <TextInput
                style={{...styles.TextInput,margin: 10, borderRadius:10}}
                label="Email"
                value={email}
                underlineColor='transparent'
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                style={{...styles.TextInput,margin: 10, borderRadius:10}}
                label="Password"
                value={pass}
                underlineColor='transparent'
                onChangeText={pass => setPass(pass)}
                secureTextEntry={!showPassword} 
                right={<TextInput.Icon icon={showPassword ? 'eye' : 'eye-off'} onPress={toggleShowPassword}/>}
            />
           
            <View style={{justifyContent: 'center', padding: 10 }}>
                <Pressable 
                style={{backgroundColor: "red", 
                alignItems:'center',
                padding: 15, 
                borderRadius:10, 
        
               }}
            onPress={handleLogin}>
            {/* onPress={()=> navigation.navigate("Router")}> */}
                  <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>LOGIN</Text>
                </Pressable>
            </View>
            {/* <View>
                <Pressable onPress={()=> navigation.navigate("SignUp")}>
                    <Text>SignUp</Text>
                </Pressable>
                </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    TextInput:{
        width: 350,
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 5,
        backgroundColor: 'white',
      
        // borderWidth: 1,
    }
})

export default Login;
