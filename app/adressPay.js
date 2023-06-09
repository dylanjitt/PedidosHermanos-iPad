import { StyleSheet, Text, View, Button, SectionList, Image, TouchableOpacity,TextInput,StatusBar,FlatList, RefreshControl, ScrollView, Pressable, } from "react-native";
import React, { useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import {AntDesign} from '@expo/vector-icons';

export default function AppAdressPay ({navigation}) {

    const [precio, setPrecio]=useState(260)
    const [monto, setMonto]=useState(300)
    const [cambio, setCambio]=useState(monto-precio)

    const gotoLogin = () => {
        navigation.navigate('Login')
    }
  
    return(
      <View style={{
         backgroundColor: "#221919",flex:1,flexDirection:"row"
      }}>
        <StatusBar barStyle={'light-content'}/>
        <View style= {{
          flex: 0.5, justifyContent:"flex-start"
        }}>
          <Text style={stylesAdressPay.title}>Dirección</Text>
          <Text style={stylesAdressPay.subtitley}>Escriba su dirección</Text>
          <View style={{
            width:610, height:66, borderColor:"#FDAF01",borderWidth:1,borderRadius:10, marginLeft:35
          }}>
            <Text style={stylesAdressPay.hintText}>"Barrio, Nombre y Nro. de Calle - Número de casa"</Text>
          </View>
  
        </View>
        
        <View style= {{
          flex: 0.5, justifyContent:"flex-start"
        }}>
          <Text style={stylesAdressPay.title}>Pago</Text>
          <View style={{
            flex:1, flexDirection:"column",justifyContent:"flex-end", alignItems:"center",
            borderRadius:10, //borrar esta linea al terminar
          }}>
  
            <Text style={stylesAdressPay.subtitle2}>Ingrese monto</Text>
            <View style={{
              flexDirection:"row",justifyContent: "center"
              }}>
                <View style={{
                backgroundColor:"#594b4b", width:184, height:79, borderRadius:10, justifyContent: "center", alignItems: "center",marginLeft:70, marginBottom:20
              }}>
                <Text style={stylesAdressPay.subtitle2}>{monto}</Text>
              </View>
              <Text style={stylesAdressPay.subtitle2}>Bs</Text>
            </View>
  
            <Text style={stylesAdressPay.subtitle3}>Total a pagar</Text>
            <View style={{
              flexDirection:"row",justifyContent: "center"
              }}>
                <View style={{
                backgroundColor:"#594b4b", width:184, height:79, borderRadius:10, justifyContent: "center", alignItems: "center",marginLeft:70,borderWidth:1,borderColor:"#FDAF01", marginBottom:20
              }}>
                <Text style={stylesAdressPay.subtitle2}>{precio}</Text>
              </View>
              <Text style={stylesAdressPay.subtitle3}>Bs</Text>
            </View>
  
            <Text style={stylesAdressPay.subtitle4}>Cambio</Text>
            <View style={{
              flexDirection:"row",justifyContent: "center"
              }}>
                <View style={{
                backgroundColor:"#594b4b", width:184, height:79, borderRadius:10, justifyContent: "center", alignItems: "center",marginLeft:70, marginBottom:20
              }}>
                <Text style={stylesAdressPay.subtitle4}>{cambio}</Text>
              </View>
              <Text style={stylesAdressPay.subtitle2}>Bs</Text>
            </View>
  
            <TouchableOpacity 
            style={{
              width:444, height:75, backgroundColor:"#fdaf01", borderRadius:15, marginTop:140, marginBottom:35, justifyContent:"center", alignItems:"center"
            }}
            onPress={gotoLogin}>
              <Text style={stylesAdressPay.pedir}>Confirmar Pedido</Text>
            </TouchableOpacity>
  
  
          </View>
  
        </View>
  
      </View>
    );
  }

  const stylesAdressPay = StyleSheet.create({
    title: {
      fontSize: 40,
      padding:30,
      paddingTop:50,
      fontWeight:"bold",
      color: "#fff"
    },
    subtitle: {
      fontSize: 40,
      padding:30,
      paddingTop:50,
      fontWeight:"bold",
      color: "#fff"
    },
    subtitley: {
      fontSize: 27,
      padding:40,
      paddingTop:45,
      fontWeight:"bold",
      color: "#FDAF01"
    },
    subtitle2: {
      fontSize: 27,
      padding:20,
      fontWeight:"bold",
      color: "#fff"
    },
    subtitle3: {
      fontSize: 27,
      padding:20,
      fontWeight:"bold",
      color: "#FDAF01"
    },
    subtitle4: {
      fontSize: 27,
      padding:20,
      fontWeight:"bold",
      color: "#c1c1c1"
    },
    hintText: {
      fontSize: 20,
      padding:20,
      color: "#c1c1c1"
    },
    pedir: {
      fontSize: 40,
      fontWeight:"bold",
      color: "#fff"
    },
  });