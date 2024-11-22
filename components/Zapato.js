import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Zapato = () => {
    // Datos del modelo de zapatos
    const shoe = {
        name: "Zapatos Deportivos XYZ",
        description: "Estos zapatos deportivos son perfectos para cualquier actividad. Con una suela cómoda y un diseño moderno, son ideales para correr o para el uso diario.",
        price: "$79.99",
        imageUrl: "https://th.bing.com/th/id/OIP.Mr_hYMEIx6nZWmzWQz6yMwAAAA?rs=1&pid=ImgDetMain" // Reemplaza con la URL de la imagen real
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{ uri: shoe.imageUrl }}
                style={styles.image}
                resizeMode="cover"
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
        top: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        top: 150,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        top: 150,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2ecc71', // Color verde para el precio
    },
});

export default Zapato;