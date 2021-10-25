import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Entypo, EvilIcons} from '@expo/vector-icons'
import constant from 'expo-constants'

export default function Header () {
    return (
        <View style={{
            marginTop: constant.statusBarHeight,
            height: 250,
            flexDirection: "row"
            
        }}>
            
                <Entypo name="menu" size={30} color= "#ffffff"/>
                <Text style={{fontSize: 22, color: "#ffffff",  fontWeight: "bold", marginLeft: 100}}>Plants</Text>
                <EvilIcons name="cart" size={30} color="#ffffff" style={{marginLeft: 120}}/>
        </View>
    );
}