import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import React, { useState } from 'react';

export default function Login({ navigation, route }) {


  const { userName, passwd } = route.params

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')



  const goToMainMenu = () => {
    if (user == userName && password == passwd) {
      navigation.replace('MainMenu')
    } else if (user !== userName && password !== passwd) {
      Alert.alert('ERROR DE INICIO DE SESIÓN', 'El usuario y/o la contraseña ingresados no son válidos, intente nuevamente.', [
        { text: "OK" }
      ])
    } else if (user !== userName) {
      Alert.alert('USUARIO INCORRECTO', 'El usuario ingresado no es válido, intente con otro.', [
        { text: "OK" }
      ])
    } else if (password !== passwd) {
      Alert.alert('CONTRASEÑA INCORRECTA', 'La contraseña ingresada no es válida, intente con otra.', [
        { text: "OK" }
      ])
    }

  }

  const goToCreateAcc = () => {
    navigation.navigate('CreateAcc')
  }

  function hideKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback
      onPress={hideKeyboard}>
      <View style={{
        flex: 1, backgroundColor: "#ffcc00", alignItems: "center", justifyContent: "center"
      }}>
        <StatusBar barStyle={'dark-content'} />
        <Image
          style={stylesLogin.imageContainer}
          source={require('../../assets/UIelements/pedidos_hermanos_logo.png')}
        />
        <Text style={stylesLogin.title}>Pedidos Hermanos</Text>

        <Text style={{ color: '#fff', }}>{userName}, {passwd}</Text>
        <TextInput
          style={stylesLogin.textbox}
          placeholder="email o nombre de usuario"
          placeholderTextColor={"#c1c1c1"}
          onChangeText={(value) => setUser(value)}
          keyboardAppearance='dark'
        />

        <TextInput
          style={stylesLogin.textbox}
          placeholder="contraseña"
          placeholderTextColor={"#c1c1c1"}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry
          keyboardAppearance='dark'
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
    </TouchableWithoutFeedback>
  );
}

const stylesLogin = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "800",
    fontStyle: "italic",
    color: "#fff",
    paddingTop: 15,
    marginBottom: 40

  },
  imageContainer: {
    width: 296,
    height: 296,
    borderRadius: 1000,
    backgroundColor: "#000",
    borderWidth: 3,
    borderColor: "#fff"
  },
  hintText: {
    fontSize: 18,
    color: "#c1c1c1",
    margin: 15
  },
  buttonlayout: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  textbox: {
    width: 475,
    height: 64,
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    paddingLeft: 15,
    fontSize: 18
  },
  loginbutton: {
    width: 243,
    height: 66,
    backgroundColor: "#101010",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20
  },
  createaccountbutton: {
    width: 240,
    height: 63,
    backgroundColor: "#594b4b",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 40
  }

});