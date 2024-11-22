import React, { useState } from 'react';
import { View, TextInput, StyleSheet,SafeAreaView,Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const [search, setSearch] = useState('');

  return (
  
    
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Entypo name="magnifying-glass" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter name or category"
          placeholderTextColor='grey'
          onChangeText={text => setSearch(text)}
          value={search}
        />
      </View>
      
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
   
    
  },
  searchBar: {
    
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '90%',
    opacity: 0.5,
    
  },
  icon: {
    marginRight: 10,
  },
  input: {
    
    flex: 1,
    height: 40,
    
  },

});
