import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      //primero 
      <View style={styles.container1}>

      </View>
      //segundo

      <View style={styles.container2}>

      </View>

      // Tercero 
      <View style= {styles.container3}>

      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  container1:{
flex: 1,
backgroundColor: ''

  },
  container2:{
   flex: 2 ,
   backgroundColor: ''

  },
  container3:{
    flex:3 ,
    backgroundColor: ''
  }


});
