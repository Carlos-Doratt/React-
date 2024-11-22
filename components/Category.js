import React from "react";
import { View, Button, SafeAreaView, StyleSheet, Text, Alert } from "react-native";
import FlatList from './FlatList'
export default function Category() {
  return (
<View style={style.container}>
<Text style={style.text1}> Category  </Text>
<FlatList/>

 </View>

 

  )
}


const style=StyleSheet.create ({
container: {
color: 'black',
    
},
text1:{
fontWeight: 'bold',
    fontSize: 20,
    marginBottom:30
}

})