import { StyleSheet, Text, View, Button, SectionList, Image, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback } from "react-native";
import React, { useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

export default function AppAdressPay({ navigation }) {

  const [precioDefault,setPrecioDefault]=useState(200);
  const [precio, setPrecio] = useState(precioDefault);
  const [monto, setMonto] = useState(0);
  const [cambio, setCambio] = useState(0);
  const [explicitAddress, setExplicitAddress] = useState('');

  const [zoneText, setZoneText]=useState('Seleccione Zona:');
  const [imageDir, setImageDir] = useState(require('../assets/directions/default.jpg'));
  const [time, setTime]=useState(0);

  const gotoCountDown = () => {
    navigation.navigate('OnTheGo')
  }

  const obrajes = ()=>{
    setImageDir(require('../assets/directions/obrajes.jpg'))
    setZoneText('OBRAJES')
    setPrecio(precioDefault+10)
    setTime(900)
  }

  const calacoto = ()=>{
    setImageDir(require('../assets/directions/calacoto.jpg'))
    setZoneText('CALACOTO')
    setPrecio(precioDefault+15)
    setTime(1800)
  }

  const achumani = ()=>{
    setImageDir(require('../assets/directions/achumani.jpg'))
    setZoneText('ACHUMANI')
    setPrecio(precioDefault+20)
    setTime(3600)
  }

  const losPinos = ()=>{
    setImageDir(require('../assets/directions/los_pinos.jpg'))
    setZoneText('LOS PINOS')
    setPrecio(precioDefault+12)
    setTime(2700)
  }

  const irpavi = ()=>{
    setImageDir(require('../assets/directions/irpavi.jpg'))
    setZoneText('IRPAVI')
    setPrecio(precioDefault+20)
    setTime(3600)
  }

  const miraflores = ()=>{
    setImageDir(require('../assets/directions/miraflores.jpg'))
    setZoneText('MIRAFLORES')
    setPrecio(precioDefault+15)
    setTime(2400)
  }

  const sopocachi = ()=>{
    setImageDir(require('../assets/directions/sopocachi.jpg'))
    setZoneText('SOPOCACHI')
    setPrecio(precioDefault+12)
    setTime(900)
  }

  const prado = ()=>{
    setImageDir(require('../assets/directions/prado.png'))
    setZoneText('PRADO')
    setPrecio(precioDefault+10)
    setTime(1800)
  }

  const perez = ()=>{
    setImageDir(require('../assets/directions/perez.jpg'))
    setZoneText('PEREZ')
    setPrecio(precioDefault+15)
    setTime(2400)
  }

  const sanPedro = ()=>{
    setImageDir(require('../assets/directions/san_pedro.jpg'))
    setZoneText('SAN PEDRO')
    setPrecio(precioDefault+15)
    setTime(2700)
  }

  const sanAntonio = ()=>{
    setImageDir(require('../assets/directions/san_antonio.jpg'))
    setZoneText('VILLA SAN ANTONIO')
    setPrecio(precioDefault+18)
    setTime(3600)
  }

  const tembladerani = ()=>{
    setImageDir(require('../assets/directions/tembladerani.png'))
    setZoneText('TEMBLADERANI')
    setPrecio(precioDefault+20)
    setTime(3600)
  }




  const updateChange = (val) => {
    setMonto(val)
    if (val < precio) {
      setCambio(0)
    } else {
      setCambio(val - precio)
    }
  }

  function hideKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback
      onPress={hideKeyboard}>
      <View style={{
        backgroundColor: "#221919", flex: 1, flexDirection: "row"
      }}>
        <StatusBar barStyle={'light-content'} />

        {/* Half 1 */}
        <View style={{
          flex: 0.5, justifyContent: "flex-start"
        }}>
          <Text style={stylesAdressPay.title}>Dirección</Text>
          <Text style={stylesAdressPay.subtitley}>Escriba su dirección</Text>
          <TextInput style={stylesAdressPay.insDir}
            placeholder='"Barrio, Nombre y Nro. de Calle - Número de casa"'
            placeholderTextColor={'#c1c1c1'}
            onChangeText={(value) => setExplicitAddress(value)} />

          <TouchableOpacity
            style={stylesAdressPay.selectZone}
            //inserte aqui la función principal para el dropdown
            onPress={tembladerani}
          >
            <Text style={stylesAdressPay.subtitle2}>{zoneText}</Text>
          </TouchableOpacity>

          <Image
            style={stylesAdressPay.imageContainer}
            source={imageDir} />

          <Text
            style={stylesAdressPay.disclaimer}>
              El precio final incluye el costo del envio, el cual puede variar dependiendo la zona seleccionada.
            </Text>


        </View>


        {/* Half 2 */}
        <View style={{
          flex: 0.5, justifyContent: "flex-start"
        }}>
          <Text style={stylesAdressPay.title}>Pago</Text>
          <View style={{
            flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: "center",
            borderRadius: 10, //borrar esta linea al terminar
          }}>

            <Text style={stylesAdressPay.subtitle2}>Ingrese monto</Text>
            <View style={{
              flexDirection: "row", justifyContent: "center"
            }}>
              <TextInput
                style={stylesAdressPay.montoInput}
                placeholder="0"
                placeholderTextColor={"#c1c1c1"}
                onChangeText={(value) => updateChange(value)}
                keyboardType='number-pad'
                maxLength={3}
              >

              </TextInput>
              <Text style={stylesAdressPay.subtitle2}>Bs</Text>
            </View>

            <Text style={stylesAdressPay.subtitle3}>Total a pagar</Text>
            <View style={{
              flexDirection: "row", justifyContent: "center"
            }}>
              <View style={{
                backgroundColor: "#594b4b", width: 184, height: 79, borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: 70, borderWidth: 1, borderColor: "#FDAF01", marginBottom: 20
              }}>
                <Text style={stylesAdressPay.subtitle2}>{precio}</Text>
              </View>
              <Text style={stylesAdressPay.subtitle3}>Bs</Text>
            </View>

            <Text style={stylesAdressPay.subtitle4}>Cambio</Text>
            <View style={{
              flexDirection: "row", justifyContent: "center"
            }}>
              <View style={{
                backgroundColor: "#594b4b", width: 184, height: 79, borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: 70, marginBottom: 20, 
              }}>
                <Text style={stylesAdressPay.subtitle4}>{cambio}</Text>
              </View>
              <Text style={stylesAdressPay.subtitle2}>Bs</Text>
            </View>

            <TouchableOpacity
              style={{
                width: 444, height: 75, backgroundColor: "#fdaf01", borderRadius: 15, marginTop: 140, marginBottom: 35, justifyContent: "center", alignItems: "center"
              }}
              onPress={gotoCountDown}>
              <Text style={stylesAdressPay.pedir}>Confirmar Pedido</Text>
            </TouchableOpacity>


          </View>

        </View>

      </View>
    </TouchableWithoutFeedback>


  );
}

const stylesAdressPay = StyleSheet.create({
  title: {
    fontSize: 40,
    padding: 30,
    paddingTop: 50,
    fontWeight: "bold",
    color: "#fff"
  },
  subtitle: {
    fontSize: 40,
    padding: 30,
    paddingTop: 50,
    fontWeight: "bold",
    color: "#fff"
  },
  subtitley: {
    fontSize: 27,
    padding: 40,
    paddingTop: 45,
    fontWeight: "bold",
    color: "#FDAF01"
  },
  montoInput: {
    backgroundColor: "#594b4b90",
    width: 184,
    height: 79,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 70,
    marginBottom: 20,
    fontSize: 27,
    padding: 20,
    textAlign: 'center',
    fontWeight: "bold",
    color: "#fff",
    borderWidth:1,
    borderColor:'#c1c1c1'
  },
  subtitle2: {
    fontSize: 27,
    padding: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  subtitle3: {
    fontSize: 27,
    padding: 20,
    fontWeight: "bold",
    color: "#FDAF01"
  },
  subtitle4: {
    fontSize: 27,
    padding: 20,
    fontWeight: "bold",
    color: "#c1c1c1"
  },
  insDir: {
    width: 628,
    height: 66,
    borderColor: "#FDAF01",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 35,
    paddingLeft: 20,
    fontSize: 20,
    color: '#fff'
  },
  imageContainer: {
    width: 628,
    height: 391,
    borderRadius: 8,
    margin: 35,
    backgroundColor:'#000'
  },
  selectZone: {
    backgroundColor: '#594b4b',
    width: 608,
    height: 80,
    borderRadius: 10,
    marginTop: 35,
    marginLeft: 40,

    alignItems: 'center'
  },
  disclaimer:{
    fontSize:18,
    color:'#c1c1c1',
    fontWeight:400,
    paddingLeft:40
  },
  hintText: {
    fontSize: 20,
    padding: 20,
    color: "#c1c1c1"
  },
  pedir: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff"
  },
});