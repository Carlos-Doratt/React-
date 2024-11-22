import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Input from './components/Input';
import Entypo from '@expo/vector-icons/Entypo';
import Texto from './components/Texto'
import Category from './components/Category'
import Popular from './components/Popular'
import Last from './components/Last'

export default function App() {
  return (
  < SafeAreaView style={styles.containerMain}>
     <View style={styles.firstContainer}>
     <Texto/>
     <Input/>

     </View>
     <View style={styles.secondContainer}>
     <Category/>
     


    
     </View>
     <View style={styles.thirdContainer}>
     <Popular/>
     <Last/>
    
     </View>
       
   </ SafeAreaView>
  
  
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  firstContainer:{
    flex: 1.3 , 
    backgroundColor: ""
  },
  secondContainer:{
    flex: 1.2,
    backgroundColor: ""
  },
  thirdContainer:{
    flex: 3,
    backgroundColor: ""
  }

});
