import { StyleSheet, Text, View, Button, SectionList, Image, TouchableOpacity,TextInput,StatusBar,FlatList, RefreshControl, ScrollView, Pressable, } from "react-native";
import React, { useState } from 'react';

export default function Login ({navigation})  {

    const [user,setUser]=useState('')
    const [password, setPassword]=useState('')

    const goToMainMenu = () => {
        navigation.navigate('MainMenu')
    }

    const goToCreateAcc = () => {
        navigation.navigate('CreateAcc')
    }
  
    return(
      <View style={{
        flex: 1, backgroundColor:"#ffcc00", alignItems:"center",justifyContent:"center"
      }}>
        <StatusBar barStyle={'dark-content'}/>
        <Image 
          style={stylesLogin.imageContainer}
          source={require('../assets/UIelements/pedidos_hermanos_logo.png')}
        />
        <Text style={stylesLogin.title}>Pedidos Hermanos</Text>
        <TextInput
          style={stylesLogin.textbox}
          placeholder="email o nombre de usuario"
          placeholderTextColor={"#c1c1c1"}
          onChangeText={(value)=>setUser(value)}
        />
  
        <TextInput
          style={stylesLogin.textbox}
          placeholder="contraseña"
          placeholderTextColor={"#c1c1c1"}
          onChangeText={(value)=>setPassword(value)}
          secureTextEntry
        />
  
        
        <TouchableOpacity 
        style={stylesLogin.loginbutton}
        onPress={goToMainMenu}>
          <Text style={stylesLogin.buttonlayout}>iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={stylesLogin.createaccountbutton}
        onPress={goToCreateAcc}>
          <Text style={stylesLogin.buttonlayout}>crear cuenta</Text>
        </TouchableOpacity>
  
      </View>
    );
  }

  const stylesLogin = StyleSheet.create({
    title:{
      fontSize: 50,
      fontWeight: "800",
      fontStyle:"italic",
      color: "#fff",
      paddingTop:15,
      marginBottom:40
  
    },
    imageContainer:{
      width:296,
      height:296, 
      borderRadius:1000, 
      backgroundColor:"#000", 
      borderWidth:3,
      borderColor:"#fff"
    },
    hintText:{
      fontSize: 18,
      color: "#c1c1c1",
      margin:15
    },
    buttonlayout:{
      fontSize: 24,
      fontWeight: "700",
      color: "#fff",
    },
    textbox:{
      width:475, 
      height:64, 
      backgroundColor:"#fff",
      marginTop:20,
      marginBottom:20,
      justifyContent:"center",
      paddingLeft:15,
      fontSize:18
    },
    loginbutton:{
      width:243, 
      height:66, 
      backgroundColor:"#101010", 
      borderRadius:30, 
      borderWidth:2,
      borderColor:"#fff", 
      justifyContent:"center",
      alignItems:"center", 
      marginTop:20,
      marginBottom:20
    },
    createaccountbutton:{
      width:240, 
      height:63, 
      backgroundColor:"#594b4b", 
      borderRadius:30, 
      borderWidth:1,
      borderColor:"#fff", 
      justifyContent:"center",
      alignItems:"center", 
      marginTop:0,
      marginBottom:40
    }
    
  });