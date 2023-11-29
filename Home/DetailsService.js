import React from 'react';
import { View, Text, Button, Alert } from 'react-native';


const DetailService = ({ route }) => {
  const { serviceName, price } = route.params;

  return (
    <View style={{padding: 10}}>
      <Text>Service Name: {serviceName}</Text>
      <Text>Price: {price}</Text>
    </View>
  );
};



export default DetailService;
