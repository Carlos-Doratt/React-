import React from 'react';
import { View, TouchableOpacity, StyleSheet,Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Popular from './Popular'

export default function Last() {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.icon1}>
          <AntDesign name="qrcode" size={24} color="black" />
          
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.iconBackground}>
          <AntDesign name="hearto" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.iconBackground}>
          <SimpleLineIcons name="bubble" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.iconBackground}>
          <MaterialIcons name="settings" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    marginTop: 70,
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  navItem: {
    padding: 5,
  },
  iconBackground: {
    backgroundColor: '',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon1:{
backgroundColor: 'red',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

