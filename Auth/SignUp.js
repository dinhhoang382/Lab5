import React, { useState } from 'react';
import { View, StyleSheet, Alert, Pressable, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passrp, setPassrp] = useState('');

  const handleSignUp = async () => {
    if (pass === passrp) {
      try {
        const { user } = await auth().createUserWithEmailAndPassword(email, pass);
        await firestore().collection('users').doc(user.uid).set({
          email: user.email,
        });

        Alert.alert('Success', 'successfully');
      } catch (error) {
        // console.error('Error creating user: ', error);
        // Alert.alert('Error', 'An error occurred while creating the user');
      }
    } else {
    //   Alert.alert('Error', 'Passwords do not match');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', margin: 10, borderRadius: 20 }}>
      <TextInput 
      label="Email" 
      value={email} 
      onChangeText={(email) => setEmail(email)} />
      <TextInput
        label="Password"
        value={pass}
        onChangeText={(pass) => setPass(pass)}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <TextInput
        label="Password repeat"
        value={passrp}
        onChangeText={(passrp) => setPassrp(passrp)}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <Pressable
          style={{
            borderColor: 'green',
            borderWidth: 1,
            padding: 15,
            borderRadius: 10,
            width: 200,
            alignItems: 'center',
          }}
          onPress={handleSignUp}
        >
          <Text>Sign Up</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUp;
