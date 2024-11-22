import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

const data = [
  { id: '1', title: 'Top 30 places' },
  { id: '2', title: 'Nature' },
  { id: '3', title: 'Food' },
];

export default function Flatlist() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={[
            styles.item, 
            { backgroundColor: item.backgroundColor },
            item.id === '1' && styles.specialItem,
            item.id === '2' && styles.item2,
            item.id === '3' && styles.item3
          ]}>
            <View style={styles.row}>
              <View style={styles.iconBackground}>
                {item.id === '1' && <Entypo name="star" size={24} color="white" style={styles.icon} />}
              </View>
              <View style={styles.iconBackground}>
                {item.id === '2' && <Entypo name="tree" size={24} color="white" style={styles.icon1} />}
              </View>
              <View style={styles.iconBackground}>
                {item.id === '3' && <Ionicons name="restaurant" size={24} color="white" style={styles.icon2} />}
              </View>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    padding: 15,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  specialItem: {
    backgroundColor: '#f8f8f8',
    width: 150,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  item2: {
    backgroundColor: '#f8f8f8',
  },
  item3: {
    backgroundColor: '#f8f8f8',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 35, 
    height: 35,
    marginRight: 10,
    backgroundColor: 'yellow',
    borderRadius: 50,
    padding: 5,
  },
  icon1: {
    marginRight: 10,
    padding: 5,
    backgroundColor: '#a8dcd9',
    borderRadius: 50
  },
  icon2: {
    marginRight: 10,
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 5,
  },
  iconBackground: {
    backgroundColor: 'white',
    borderRadius: 50,
  
    
  },
});
