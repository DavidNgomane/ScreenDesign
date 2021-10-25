import React from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {MaterialCommunityIcons, EvilIcons, Feather, Entypo} from '@expo/vector-icons'
import constant from 'expo-constants'


const image = {uri: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_430,h_430/gen-workflow%2Fproduct-listing%2Fyuccacanehd" };

const pic1 = {uri: "https://images.unsplash.com/photo-1585738876562-7d008f53022a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eXVjY2ElMjBpbmRvb3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" };

const pic2 = {uri: "https://media.istockphoto.com/photos/house-plant-in-the-window-inside-a-beautiful-new-home-or-flat-picture-id1272284980?b=1&k=20&m=1272284980&s=170667a&w=0&h=5N8dsgDOzSkkVF_8aCPt15oROUARqQALBib1srLTWLU=" };

const pic3 = {uri: "https://images.unsplash.com/photo-1591102527977-3531f6a4f538?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eXVjY2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" };


const SecondScreen = ({navigation}) => (
    <View>
        <ScrollView>
            <ImageBackground source = {image} resizeMode="cover" style={{}}>
                <View style={{
                    marginTop: constant.statusBarHeight,
                    height: 600,
                    flexDirection: "row"
                        }}>
                        <MaterialCommunityIcons name="keyboard-backspace" size={30} color="#000000"  onPress = {() => navigation.navigate("Home")}/>
                        <Text style={{fontSize: 22, color: "#000000",  fontWeight: "bold", marginLeft: 100}}>Plants</Text>
                        <EvilIcons name="cart" size={30} color="#000000" style={{marginLeft: 120}}/>
                </View>
            </ImageBackground>
            
            <View style={{backgroundColor: '#ffffff', borderRadius: 10, 
                        justifyContent: 'center', alignItems: 'center', padding: 20, flex: 1,
                            width: 300, height: 800, marginBottom: 25, marginLeft: 30}}>

                    <View>
                        <Text style={{ 
                                        fontSize: 40,
                                        justifyContent: "center",
                                        textAlign: "center",
                                        color: "black",
                                        fontWeight: "bold"}}>Yucca Cane</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Etiam et iaculis purus, vel ullamcorper mauris.
                             Donec laoreet mauris vitae mauris posuere, et aliquet lectus rhoncus.
                        </Text>

                        <Text style={{textAlign: "center", 
                                        color: "#008000", 
                                        fontWeight: "bold",
                                        fontSize: 40
                                        }}>25.00 $
                        </Text>
                    <View style={{flex: 1}}>
                        <TouchableOpacity style={{width: 300,
                            marginTop: 90,
                            backgroundColor: "green",
                            padding: 15,
                            borderRadius: 40,
                            alignSelf: "center",
                            position: 'absolute',
                            //bottom: 50, 
                        }} 
                            onPress = {() => navigation.navigate("SecondScreen")} >
                        <Text style={{ color: "white",
                            fontSize: 15,
                            justifyContent: "center",
                            textAlign: "center",}}>Add To Cart
                            </Text>
                        </TouchableOpacity>
                        </View>

                    <View>
                        <Text style={{ fontSize: 20,
                                        color: "black",
                                        fontWeight: "bold"}}>
                            Details
                        </Text>
                    </View>

                    <View style={{flexDirection: "row",
                                    height: 100,
                                    padding: 20,
                                    marginBottom: 80,
                                    width: 300}}>
                    <View style={{backgroundColor: "#f5f5f5", flex: 1, margin: 5, 
                    borderRadius: 10,  justifyContent: 'center', alignItems: 'center', height: 100}}>
                        <Entypo name="water" size={24} color="#008000" />
                        <Text style={{color: "black",
                                        fontWeight: "bold"}}>Water</Text>
                        <Text>Every 14 Days</Text>
                    </View>

                    <View style={{backgroundColor: "#f5f5f5", flex: 1, margin: 5, 
                    borderRadius: 10,  justifyContent: 'center', alignItems: 'center',  height: 100}}>
                            <Feather name="sun" size={24} color="#008000" />
                            <Text style={{color: "black",
                                        fontWeight: "bold"}}>Sunlight</Text>
                            <Text>Need Sunlight</Text>
                    </View>

                    </View>

                    <View>
                        <Text style={{ fontSize: 20,
                                        color: "black",
                                        fontWeight: "bold"}}>
                            Gallery
                        </Text>
                    </View>

                    <View style={{flexDirection: "row",
                                    height: 100,
                                    padding: 20,
                                    marginBottom: 80,
                                    width: 300}}>

                   <ImageBackground source = {pic1} resizeMode="cover" style={{flex: 1, margin: 5,  height: 90}}>
                    <View style={{ flex: 1, margin: 5, 
                    borderRadius: 10,  justifyContent: 'center', alignItems: 'center', height: 100}}>
                          

                         
                    </View>
                    </ImageBackground>
                    
                    <ImageBackground source = {pic2} resizeMode="cover" style={{flex: 1, margin: 5,  height: 90}}>
                    <View style={{ flex: 1, margin: 5, 
                    borderRadius: 10,  justifyContent: 'center', alignItems: 'center',  height: 100}}>
                              

                              
                    </View> 
                    </ImageBackground>

                    <ImageBackground source = {pic3} resizeMode="cover" style={{flex: 1, margin: 5,  height: 90}}>
                    <View style={{flex: 1, margin: 5, 
                    borderRadius: 10,  justifyContent: 'center', alignItems: 'center', height: 100}}>
                              
                              
                    </View>
                    </ImageBackground>

                    </View>
                    </View>
            </View>
        </ScrollView>
    </View>
);



export default SecondScreen