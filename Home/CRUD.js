import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';




const FirestoreCRUD = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const snapshot = await firestore().collection('items').get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addItem = async () => {
    await firestore().collection('items').add({ text });
    setText('');
    fetchData();
  };

  const deleteItem = async (id) => {
    await firestore().collection('items').doc(id).delete();
    fetchData();
  };

  return (
    <View>
      <TextInput
        placeholder="Enter item"
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button title="Add" onPress={addItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Button title="Delete" onPress={() => deleteItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default FirestoreCRUD;
