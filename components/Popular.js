import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Popular() {
  return (

    <View>
      <Text style={styles.texto1}>Popular</Text>
      <ScrollView horizontal={true} style={styles.view}>
        <View style={styles.row}>
          <View>
            <ImageBackground
              source={{ uri: 'https://thumbs.dreamstime.com/b/vertical-de-la-estatua-ecuestre-del-duque-eberhard-im-bart-en-el-patio-antiguo-castillo-un-stuttgart-alemania-263401454.jpg' }}
              style={styles.logo}
            >
              <Text style={styles.imageText}>Monument to Salavat Yulaev</Text>
              <View style={styles.iconBackground}>
                <AntDesign name="heart" size={26} color="red" />
              </View>
            </ImageBackground>
          </View>

          <View>
            <ImageBackground
              source={{ uri: 'https://th.bing.com/th/id/OIP.17lWCrtrBK638gH7CcdlzAHaE8?rs=1&pid=ImgDetMain' }}
              style={styles.logo}
            >
              <Text style={styles.imageText}>Fall of the year</Text>
              <View style={styles.iconBackground}>
                <AntDesign name="heart" size={26} color="red" />
              </View>
            </ImageBackground>
          </View>

          <View>
            <ImageBackground
              source={{ uri: 'https://th.bing.com/th/id/OIP.IOsJ6EcOCO29vZvH8V4xOgHaE6?w=292&h=193&c=7&r=0&o=5&pid=1.7' }}
              style={styles.logo}
            >
              <Text style={styles.imageText}>Best views in Israel</Text>
              <View style={styles.iconBackground}>
                <AntDesign name="heart" size={26} color="red" />
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  texto1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30,
    left: 20,
  },
 logo: { 
   width: 220,
  height: 250, 
  borderRadius: 50, 
  marginHorizontal: 10,
  justifyContent: 'center',
   alignItems: 'center', 
   overflow: 'hidden' } ,
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view: {
    marginHorizontal: 20,
  },
  imageText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    top: 60,
    backgroundColor: '',
    padding: 5,
  },
  iconBackground: {
    backgroundColor: 'white',
    color:'red',
    borderRadius: 50,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 200,
    right: 10,
  },
});
