import { StyleSheet, Text, View, Button, SectionList, Image, TouchableOpacity, TextInput, StatusBar, FlatList, RefreshControl, ScrollView, Pressable, } from "react-native";
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import Star from "../buttons/star";

export default function Stars(){

    const [starRating, setStarRating]=useState(null);

    const size = 40;
    const margin = 5;

    return(
        <View
        style={styleStars.body}>
            <TouchableOpacity
            onPress={()=>setStarRating(1)}>
                <FontAwesome
                name={starRating>=1 ? 'star':'star-o'}
                size={size}
                margin={margin}
                style={starRating>=1 ? styleStars.on : styleStars.off}/>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>setStarRating(2)}>
                <FontAwesome
                name={starRating>=2 ? 'star':'star-o'}
                size={size}
                margin={margin}
                style={starRating>=2 ? styleStars.on : styleStars.off}/>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>setStarRating(3)}>
                <FontAwesome
                name={starRating>=3 ? 'star':'star-o'}
                size={size}
                margin={margin}
                style={starRating>=3 ? styleStars.on : styleStars.off}/>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>setStarRating(4)}>
                <FontAwesome
                name={starRating>=4 ? 'star':'star-o'}
                size={size}
                margin={margin}
                style={starRating>=4 ? styleStars.on : styleStars.off}/>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>setStarRating(5)}>
                <FontAwesome
                name={starRating>=5 ? 'star':'star-o'}
                size={size}
                margin={margin}
                style={starRating>=5 ? styleStars.on : styleStars.off}/>
            </TouchableOpacity>

            {/* <Star number={1}/>
            <Star number={2}/>
            <Star number={3}/> */}


        </View>
    )

}

const styleStars = StyleSheet.create({
    body:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        margin:20
    },
    off:{
        color:'#aaa'
    },
    on:{
        color:'#FFCC00'
    }
})