import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Zapato from './components/Zapato';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      

      <View style={styles.container1}>
     <Zapato/>
      </View>

      
      <View style= {styles.container3}>

      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   
    
  },
  container1:{
   flex: 2 ,
   backgroundColor: ''

  },


});
