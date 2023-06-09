import { StyleSheet, Text, View, Button, SectionList, Image, TouchableOpacity,TextInput,StatusBar,FlatList, RefreshControl, ScrollView, Pressable, } from "react-native";
import React, { useState } from 'react';
import { Link } from "expo-router";

import Ionicons from '@expo/vector-icons/Ionicons';
import {AntDesign} from '@expo/vector-icons';

import FoodList from "./FoodList";

export default function MainMenu ({navigation})  {

    const[total,setTotal]=useState(0)
  
    function buttonplus(cantidad, precio){
      cantidad++;
      setTotal(total+precio)
    }
  
    function plus (array, index, newvalue){
      let update = array[index];
      update.value=newvalue;
      return array;
    }
  
    function buttonminus(cantidad, precio){
      cantidad-1;
      setTotal(total-precio)
    }

    const gotoAdressPay = () => {
        navigation.navigate('AdressPay')
    }
    
  
    const [foods,setFoods]=useState([
      {name:'Hamburguesa',price:25,image:require('../assets/foodsDrinks/hamburguesa.jpeg'),cant:0},
      {name:'Pollos Hermanos',price:20,image:require('../assets/foodsDrinks/pollo_frito.jpeg'),cant:0},
      {name:'Pizza N.Y.',price:50,image:require('../assets/foodsDrinks/pizza.jpeg'),cant:0},
      
      
      {name:'Spaghetti',price:45,image:require('../assets/foodsDrinks/spaghetti.png'),cant:0},
      {name:'Hot Dog',price:8,image:require('../assets/foodsDrinks/hot_dog.png'),cant:0},
      {name:'Tacos',price:30,image:require('../assets/foodsDrinks/tacos.png'),cant:0},
      {name:'Ensalada',price:30,image:require('../assets/foodsDrinks/ensalada.jpg'),cant:0},
      {name:'Club Sandwich',price:40,image:require('../assets/foodsDrinks/club_sandwich.jpeg'),cant:0},
      
    ])
  
    let [drinks,setDrinks]=useState([
      {name:'Coca Cola 2Lt',price:14,image:require('../assets/foodsDrinks/coca_cola_2lt.jpg'),cant:0},
      {name:'Coca Cola \npersonal',price:5,image:require('../assets/foodsDrinks/coca_cola_personal.jpg'),cant:0},
      {name:'Fanta Naranja \npersonal',price:5,image:require('../assets/foodsDrinks/fanta_personal.jpg'),cant:0},
      {name:'Fanta Mandarina \npersonal',price:5,image:require('../assets/foodsDrinks/fanta_mandarina_personal.jpg'),cant:0},
      {name:'Fanta Papaya \npersonal',price:5,image:require('../assets/foodsDrinks/fanta_papaya_personal.jpg'),cant:0},
      {name:'Fanta Guaraná \npersonal',price:5,image:require('../assets/foodsDrinks/fanta_guarana_personal.jpg'),cant:0},
      {name:'Sprite \npersonal',price:5,image:require('../assets/foodsDrinks/sprite_personal.jpg'),cant:0}
    ])
  
    return(
      <View style={stylesMain.main2}>
        <StatusBar barStyle={'light-content'}/>
        {/* ManualHeader */}
        <View style={{flex: 0.09,justifyContent: "flex-start",alignItems: "center",paddingTop:25,flexDirection:'row'}}>
          <View style={{flex:3,alignItems:'fcenter',justifyContent:'flex-start',flexDirection:'row'}}>
            <TextInput
            selectionColor={'#fff'} 
            style={stylesMain.searchBar}
            placeholder="Busca un producto"
            placeholderTextColor={'#c1c1c1'}
            //Figure out how to change the color to imputted text
            ></TextInput>
            <TouchableOpacity
            style={stylesMain.searchButton}
            // Insert onPress Functionality for searchBar
            >
              <Ionicons name="search" size={22} color={'#fff'}></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={{flex:4,alignItems:"center",justifyContent:"center"}}>
            <Text style ={stylesMain.title}>Bienvenido a Pedidos Hermanos!</Text>
          </View>
          <View style={{flex:3,alignItems:'flex-end',justifyContent:'center'}}>
            <Image 
            style={{width:40,height:40,marginRight:20,borderColor:'#c1c1c1',borderWidth:1,borderRadius:100}} 
            source={require('../assets/UIelements/pedidos_hermanos_logo.png')}
            />
          </View>
  
        </View>
  
        {/* mainMenu */}
         <ScrollView style={stylesMain.scrolling} > 
          
          <Text style={stylesMain.section}>Comida.</Text>
          <FlatList
          
          scrollEnabled={'false'}
          numColumns={3}
          keyExtractor={item => item.name}
          data={foods}
          justifyContent={"center"}
          alignItems={"center"}
          renderItem={({item}) =>(
            <View style={stylesMain.foodContainer}>
              <Image
              style={stylesMain.imageContainer}
              source={item.image}
              />
              <View>
                <View style={{flexDirection:"column",justifyContent:"center",paddingTop:0,height:76,}}>
                  <Text style={stylesMain.titleItem}>{item.name} </Text> 
                </View>
                <View style={{flexDirection:"row",alignItems:"flex-start",flex:1}}>
                  <View style={{width:70}}>
                    <Text style={stylesMain.priceItem}>{item.price} Bs.</Text>
                  </View>
                  
                  <View style={{flexDirection:'row-reverse', justifyContent:'flex-start',alignItems:'flex-end',height:80,width:165,padding:5}}>
                    <AntDesign name="pluscircleo" size={34} color="#fff" margin={5} 
                    onPress={() => buttonplus(item.cant,item.price)
                    } />
                    {item.cant!==0 && (
                     <>
                     <Text style={stylesMain.intem}>{item.cant}</Text>
                     <AntDesign name="minuscircleo" size={34} color="#fff" margin={5} 
                     onPress={() => buttonminus(item.cant,item.price)
                     }></AntDesign>
                     </> 
                    )} 
                  </View>
                </View>
              </View>
            </View>
            
          )} 
          />
  
          <Text style={stylesMain.section}>Comida.</Text>
          <FoodList
          selectList={foods}
          function1={() => buttonplus(item.cant,item.price)}
          function2={() => buttonminus(item.cant,item.price)}
          />
  
          <Text style={stylesMain.section}>Bebidas.</Text>
          <FoodList
          selectList={drinks}
          function1={() => buttonplus(item.cant,item.price)}
          function2={() => buttonminus(item.cant,item.price)}
          />
         </ScrollView> 
  
  
        {/* bottom */}
        <View style={{
          flex: 0.09,  justifyContent:"center",alignItems:"center",paddingBottom:20
        }}>
          <TouchableOpacity 
          style={stylesMain.buttonPedir}
          onPress={gotoAdressPay}
          >
              <View style={{
                flex: 0.75
              }}><Text style={stylesMain.total}>total: {total} Bs.</Text> 
              </View>
  
              <View style={{
                flex: 0.25
              }}><Text style={stylesMain.pedir}>Pedir!</Text> 
              </View> 
          </TouchableOpacity> 
        </View>
  
      </View>
    ) 
  }

  const stylesMain = StyleSheet.create({
    scrolling:{
      flex: 0.82,
      marginTop:12
      
    },
    title: {
      fontSize: 35,
      fontWeight: "bold",
      color: "#fff"
    },
    searchBar:{
      width:248,
      height:42,
      backgroundColor:'#101010',
      borderBottomColor:'#c1c1c1',
      borderTopColor:'#101010',
      borderLeftColor:'#101010',
      borderRightColor:'#101010',
      marginLeft:20,
      borderWidth:1,
      borderRadius:5,
      paddingLeft:13,
      textDecorationColor:'#fff',
      
    },
    searchButton:{
      width:44,
      height:44,
      backgroundColor:'#fdaf01',
      borderRadius:100,
      marginLeft:10,
      justifyContent:'center',
      alignItems:'center'
  
    },
    foodContainer: {
      width:419,
      height:160,
      backgroundColor:"#594b4b",
      borderRadius:10,
      margin:10,
      flexDirection:"row",
      
    },
    imageContainer: {
      width:153,
      height:127,
      backgroundColor:"#000",
      borderRadius:10,
      margin:15,
      
    },
    total: {
      fontSize: 30,
      padding:10,
      color: "#c1c1c1"
    },
    pedir: {
      fontSize: 40,
      padding:5,
      fontWeight: "bold",
      color: "#FFCC00"
    },
    main2: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
     
      backgroundColor: "#221919",
    },
    title2: {
      fontSize: 60,
      fontWeight: "bold",
      color: "#fff"
    },
    section: {
      fontSize: 27,
      fontWeight: "bold",
      color: "#fdaf01",
      paddingLeft:15
    },
    titleItem: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#fff",
      paddingTop:10
      
    },
    priceItem: {
      fontSize: 20,
      paddingTop:9,
      color: "#c1c1c1"
    },
    intem:{
      fontSize:30,
      color:'#fff',
      fontWeight:600,
      margin:5
    },
    buttonPedir:{
      backgroundColor:"#000000",
      width:522, 
      height:64,
      borderWidth:1,
      borderColor:"#fff",
      borderRadius:10,
      flexDirection:"row"
    }
  });