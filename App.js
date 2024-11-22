import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Zapato from './componentes/zapato2'; 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.container1}>
        <Zapato />
      </View>

      <View style={styles.container3}>
        {/* Puedes agregar otros componentes aquí */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 2,
    backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 1,
    backgroundColor: '',
  },
});
