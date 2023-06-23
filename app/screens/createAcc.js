import { StyleSheet, Text, View, Button, SectionList, Image, TouchableOpacity, TextInput, StatusBar, FlatList, RefreshControl, ScrollView, Pressable, Linking, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import React, { useState } from 'react';
import { Link } from "expo-router";

export default function CreateAccount({ navigation }) {

  const [user, setUser] = useState('')
  const [userName, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')


  const gotoLogin = () => {
    if (user !== '' && userName !== '' && email !== '' && password !== '' && age !== '') {
      navigation.navigate('Login', { userName: userName, passwd: password })
    } else {
      Alert.alert('ERROR DE CREACIÓN DE CUENTA', 'complete todas las casillas con los datos solicitados para continuar', [
        { text: "OK" }
      ])
    }

  }

  function hideKeyboard() {
    Keyboard.dismiss();
  }

  return (

    <TouchableWithoutFeedback
      onPress={hideKeyboard}>
      <View style={stylesCreateaccount.body}>
        <StatusBar barStyle={'dark-content'} />
        <View style={{
          flexDirection: "row", marginTop: 40
        }}>
          <Image style={stylesCreateaccount.imageContainer}
            source={require('../../assets/UIelements/pedidos_hermanos_logo.png')}
          />

          <View style={{
            flexDirection: "column", marginLeft: 10, margin: 5
          }}>
            <Text style={stylesCreateaccount.title}>Pedidos Hermanos</Text>
            <Text style={stylesCreateaccount.signUp}>Sign Up</Text>

          </View>
        </View>

        <View style={{
          flex: 1, alignItems: "flex-start", justifyContent: "center", flexDirection: "column"
        }}>
          <Text style={stylesCreateaccount.subtitle}>Nombre Completo</Text>
          <TextInput
            style={stylesCreateaccount.textbox}
            placeholder="Ej.: Damon Mauricio Albarn Morales"
            placeholderTextColor={"#c1c1c1"}
            onChangeText={(value) => setUser(value)}
            keyboardAppearance='dark'
          />


          <Text style={stylesCreateaccount.subtitle}>Nombre de Usuario</Text>
          <TextInput
            style={stylesCreateaccount.textbox}
            placeholder="Ej.: 2DGorillaaz9000"
            placeholderTextColor={"#c1c1c1"}
            onChangeText={(value) => setUsername(value)}
            keyboardAppearance='dark'
          />


          <Text style={stylesCreateaccount.subtitle}>Correo Electrónico</Text>
          <TextInput
            style={stylesCreateaccount.textbox}
            placeholder="Ej.: lyllatheotter@gmail.com"
            placeholderTextColor={"#c1c1c1"}
            onChangeText={(value) => setEmail(value)}
            keyboardAppearance='dark'
          />


          <Text style={stylesCreateaccount.subtitle}>Contraseña</Text>
          <TextInput
            style={stylesCreateaccount.textbox}
            placeholder="Mínimo 8 caracteres, un número, mayuscula y minuscula"
            placeholderTextColor={"#c1c1c1"}
            onChangeText={(value) => setPassword(value)}
            keyboardAppearance='dark'
          />


          <View style={{
            alignItems: "center", justifyContent: "space-around", flexDirection: "row"
          }}>
            <View style={{
              alignItems: "flex-start", justifyContent: "center", flexDirection: "column", marginRight: 46
            }}>
              <Text style={stylesCreateaccount.subtitle}>Edad</Text>
              <TextInput
                style={stylesCreateaccount.minibox}
                placeholder="Ej: 20"
                placeholderTextColor={"#c1c1c1"}
                onChangeText={(value) => setAge(value)}
                keyboardAppearance='dark'
                keyboardType="number-pad"
              />
            </View>

            <View style={{
              alignItems: "flex-start", justifyContent: "center", flexDirection: "column"
            }}>
              <Text style={stylesCreateaccount.subtitle}>Género</Text>
              <View style={stylesCreateaccount.minibox}>
                <Text style={stylesCreateaccount.hintText}>seleccione</Text>
              </View>

            </View>

          </View>
        </View>

        <View style={{
          alignItems: "center", justifyContent: "center", paddingBottom: 5
        }}>

          <Text style={stylesCreateaccount.toreg}>Al darle a "registrarse" aceptas nuestros{' '}
            <Text
              style={stylesCreateaccount.termsCond}
              onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ') }}
            >Términos y condiciones
            </Text>
          </Text>



          <TouchableOpacity
            style={stylesCreateaccount.button}
            onPress={gotoLogin}>
            <Text style={stylesCreateaccount.buttonlayout}>Registrarse</Text>
          </TouchableOpacity>

        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const stylesCreateaccount = StyleSheet.create({
  body: {
    flex: 1, backgroundColor: "#ffcc00", alignItems: "center", justifyContent: "center"
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    fontStyle: "italic",
    color: "#fff",
    paddingTop: 0,
  },
  signUp: {
    fontSize: 27,
    marginLeft: 10
  },
  imageContainer: {
    width: 96, height: 96, borderRadius: 1000, backgroundColor: "#000", borderWidth: 3, borderColor: "#fff"
  },
  subtitle: {
    fontSize: 35,
    fontWeight: "800",
    color: "#fff",
    paddingBottom: 15,
  },
  hintText: {
    fontSize: 18,
    color: "#c1c1c1",
    margin: 0
  },
  buttonlayout: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  button: {
    width: 240,
    height: 60,
    backgroundColor: "#101010",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 20
  },
  textbox: {
    width: 475,
    height: 64,
    backgroundColor: "#fff",
    marginBottom: 25,
    justifyContent: "center",
    paddingLeft: 15,
    fontSize: 18
  },
  minibox: {
    width: 214,
    height: 64,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginBottom: 30,
    fontSize: 18,
    paddingLeft: 15,
  },
  toreg: {
    fontSize: 18
  },
  termsCond: { fontSize: 18, color: "#fff", fontWeight: "700" }


});