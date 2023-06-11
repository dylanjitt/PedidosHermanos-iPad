import { StyleSheet,TouchableOpacity, } from "react-native";
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Star = (props) => {

    const [starRating, setStarRating]=useState(null);

    return(
        <TouchableOpacity
            onPress={()=>setStarRating(props.number)}>
                <FontAwesome
                name={starRating>=props.number ? 'star':'star-o'}
                size={40}
                style={starRating>=props.number ? styleStars.on : styleStars.off}/>
            </TouchableOpacity>
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

export default Star;