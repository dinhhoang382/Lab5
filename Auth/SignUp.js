import React, { useState } from 'react';
import { View, StyleSheet, Alert, Pressable, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [passrp, setPassrp] = useState();

    const handleSignUp = () => {
        if(pass == passrp){
        auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(() => {
                Alert.alert("","Register Success")
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
        }else{
            console.log("failed")
        }
    }

    return (
        <View style={{flex:1,justifyContent:'center', margin:10, borderRadius:20}}>
            <TextInput
                label="Email"
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                label="Password"
                value={pass}
                onChangeText={pass => setPass(pass)}
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
            />
            <TextInput
                label="Password repeat"
                value={passrp}
                onChangeText={passrp => setPassrp(passrp)}
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <Pressable 
                style={{borderColor: "green", 
                borderWidth:1,
                padding: 15, 
                borderRadius:10, 
                width:200, 
                alignItems:'center'}}
                onPress={handleSignUp}>
                  <Text>Sign Up</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={()=> navigation.navigate("Login")}>
                    <Text>Login</Text>
                </Pressable>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SignUp;
