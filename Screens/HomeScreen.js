import React from 'react';
import Header from './Header';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const image = {uri: "https://media.istockphoto.com/photos/yucca-a-houseplant-against-a-white-wall-a-plant-on-the-armrest-of-a-picture-id1317768926?k=20&m=1317768926&s=612x612&w=0&h=5ezfyYQnKvl_qBgP4-y7X4aP35hxVyxrNBoD_QLP3ek=" };

const HomeScreen = ({navigation}) => (
    <View style={styles.container}>
        <ImageBackground source = {image} resizeMode="cover" style={styles.image}>
            <Header />

            <Text style={styles.text}>
                Bring Nature Into Your Home  With our Plants
            </Text>
            <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate("SecondScreen")} >
            <Text style={styles.btnText}>Shop Now</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: 'cover',
    },
    button: {
        width: 300,
        marginTop: 20,
        backgroundColor: "green",
        padding: 15,
        borderRadius: 40,
        alignSelf: "center",
        position: 'absolute',
        bottom: 50, 
    },
    btnText: {
        color: "white",
        fontSize: 15,
        justifyContent: "center",
        textAlign: "center",
    },
    text: {
        height: 450,
        fontSize: 40,
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        //fontFamily: "Cochin",
        fontWeight: "bold"
    },
});

export default HomeScreen