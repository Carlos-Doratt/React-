import React from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';

const Zapato = () => {
    // Datos del modelo de zapatos
    const shoe = {
        name: "Adidas Zamba",
        description: "Las Adidas Zamba son perfectas para un estilo urbano y comodidad durante todo el día. Con su diseño clásico y materiales de alta calidad, ofrecen un ajuste cómodo y un toque moderno.",
        price: "$89.99", // Precio original
        imageUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ee8a8ab58ba545b58c67a2be96c8fa24_9366/Zapatillas_Zamba_Hombre_Blanco_GX6660_01_standard.jpg" // Imagen de las Adidas Zamba
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{ uri: shoe.imageUrl }}
                style={styles.image}
                resizeMode="contain" // Cambiado a 'contain'
            />
            <Text style={styles.title}>{shoe.name}</Text>
            <Text style={styles.description}>{shoe.description}</Text>
            <Text style={styles.price}>{shoe.price}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2ecc71', // Color verde para el precio
        marginTop: 10,
    },
});

export default Zapato;
