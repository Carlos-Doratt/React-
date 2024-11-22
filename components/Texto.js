import react from "react-native"
import{View,Text, StyleSheet,SafeAreaView} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Texto(){
  return(
    <SafeAreaView style={Styles.container}>  
    <Text style={Styles.text1}> Nexus  </Text>
    <View style={Styles.img}> 
    <Ionicons name="map-outline" size={24} color="red" />
    
    </View>
    <View> 
      <Text style={Styles.text2}> Choose another </Text>
      </View>
    </SafeAreaView>
  )
}

const Styles= StyleSheet.create({
  container:{
    marginTop:10,
    position: 'relative'
    
  },
  text1: {
  
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    
  },
  text2:{
    marginTop: 10,
    opacity:0.5,
    
  },

  img: {
    position:'absolute',
    right:20,
    
    
  }
})