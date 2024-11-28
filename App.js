import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Primero: Contenido de la imagen y texto */}
      <View style={styles.container1}>
        <Image
          source={{ uri: 'https://media.revistagq.com/photos/5de7d5835ec41f0008094f92/16:9/w_2560%2Cc_limit/krists-luhaers-N7G0LNl5e1g-unsplash.jpg' }} // Reemplaza con la URL de tu imagen
          style={styles.image}
        />
        <Text style={styles.mediumText}>$39.99</Text>
        <Text style={styles.titleText}>Zapatos Converse</Text>
        <Text style={styles.normalText}>Zapatos popularmente conocidos entre la gente. Disponibles en varios estilos y colores y perfectos para salidas con amigos a algún lugar de la ciudad.</Text>
      </View>

      {/* Segundo: Puedes agregar otro contenido aquí */}
      <View style={styles.container2}>
        {/* Contenido adicional para container2 */}
      </View>

      {/* Tercero: Puedes agregar más contenido aquí */}
      <View style={styles.container3}>
        {/* Contenido adicional para container3 */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 20, // Espacio entre la parte superior de la pantalla y la imagen
  },
  container2: {
    flex: 2,
    backgroundColor: '#fff', // Puedes cambiar el color de fondo según sea necesario
  },
  container3: {
    flex: 3,
    backgroundColor: '#fff', // Puedes cambiar el color de fondo según sea necesario
  },
  image: {
    width: '60%',
    height: '40%',
    aspectRatio: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  mediumText: {
    fontSize: 18,
    color: 'red',
    marginVertical: 5,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  normalText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
    textAlign: 'justify', // Justificar el texto
    width: '80%', // Ajustar el ancho para mejor justificación
  },
});

export default App;
