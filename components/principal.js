import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';  
import { Searchbar } from 'react-native-paper';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function ComponentePrueba() {
  const categoryData = [
    {
      id: '1',
      icon: <MaterialCommunityIcons name="star-box" size={35} color="yellow"/>,
      text: 'Deportivo'
    },
    {
      id: '2',
      icon:<FontAwesome6 name="person" size={30} color="blue" />,
      text: ' Caballero'
    },
    {
      id: '3',
      icon: <Ionicons name="woman-sharp" size={35} color="pink" />,
      text: 'Dama'
    }
  ];

  const images = [
    { id: '1', uri: 'https://th.bing.com/th/id/OIP.Mr_hYMEIx6nZWmzWQz6yMwAAAA?w=474&h=474&rs=1&pid=ImgDetMain' },
    { id: '2', uri: 'https://th.bing.com/th/id/OIP.uveJkPN4egHLuiLhaNtehwHaHa?rs=1&pid=ImgDetMain' },
    { id: '3', uri: 'https://th.bing.com/th/id/R.0f01299372989639549053cef2bf25f0?rik=kw%2bAh2Cyax%2f6zw&pid=ImgRaw&r=0' },
    { id: '4', uri: 'https://th.bing.com/th/id/OIP.lJ7UJGDVPq2URI8LynGjEwHaFP?rs=1&pid=ImgDetMain' }  
  ];

  const renderImageItem = ({ item }) => (
    <View style={styles.imageWrapper}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.surface}>
      <View style={styles.iconTextContainer}>
        {item.icon}
        <Text>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Nike 2</Text>
      </View>

      <Searchbar style={styles.searchbar} placeholder="The best shoes in the area..." />
      <Text style={styles.title2}>Categories</Text>
      
      <View style={styles.categoryContainer}>
        <FlatList
          data={categoryData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.surfaceContainer}
        />
      </View>

      <Text style={styles.titlepop}>Popular</Text>
      <FlatList
        data={images}
        renderItem={renderImageItem}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={styles.imageContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    top: 45,
  },
  searchbar: {
    marginVertical: 10,
    top: 35,
  },
  surfaceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  surface: {
    padding: 8,
    width: 130,
    height: 55,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    borderWidth:1,
  },
  title2:{
    fontSize: 35,
    fontWeight: "700",
    top: 35,
  },
  imageWrapper:{
    position:'relative',
    marginHorizontal:5,
  },
  image:{
    width:290,
    height:359,
    borderRadius:25,
    borderWidth:2,
    borderColor:'white',
  },
  titlepop:{
    fontSize: 40,
    fontWeight:"700",
    top:15,
    marginBottom: 60,
  },
  iconTextContainer:{
   flexDirection:"row",
   alignItems:"center",
   right:15,
 },
 imageContainer:{
   flexDirection:'row',
   justifyContent:'flex-start',
   marginBottom: 50,
 },
 categoryContainer:{
   overflowX:'scroll', 
 }
});

