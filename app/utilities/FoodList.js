import { StyleSheet, Text, View, SectionList, Image,  FlatList, } from "react-native";
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {AntDesign} from '@expo/vector-icons';

const FoodList = (props) => {

    const [Listt,setListt]=useState(props.selectList)
    return(
        <FlatList
        //nestedScrollEnabled
        scrollEnabled={'false'}
        numColumns={3}
        keyExtractor={item => item.name}
        data={Listt}
        justifyContent={"center"}
        alignItems={"center"}
        renderItem={({item}) =>(
          <View style={viewItem.foodContainer}>
            <Image
            style={viewItem.imageContainer}
            source={item.image}
            />
            <View>
              <View style={{flexDirection:"column",justifyContent:"center",paddingTop:0,height:76,}}>
                <Text style={viewItem.titleItem}>{item.name} </Text> 
              </View>
              <View style={{flexDirection:"row",alignItems:"flex-start",flex:1}}>
                <View style={{width:70}}>
                  <Text style={viewItem.priceItem}>{item.price} Bs.</Text>
                </View>
                
                <View style={{flexDirection:'row-reverse', justifyContent:'flex-start',alignItems:'flex-end',height:80,width:165,padding:5}}>
                  <AntDesign name="pluscircleo" size={34} color="#fff" margin={5} 
                  onPress={props.function1
                  } />
                  {item.cant!==0 && (
                   <>
                   <Text style={viewItem.intem}>{item.cant}</Text>
                   <AntDesign name="minuscircleo" size={34} color="#fff" margin={5} 
                   onPress={props.function2
                   }></AntDesign>
                   </> 
                  )} 
                </View>
              </View>
            </View>
          </View>
          
        )} 
        />
    );
}

const viewItem = StyleSheet.create({
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
});

export default FoodList;