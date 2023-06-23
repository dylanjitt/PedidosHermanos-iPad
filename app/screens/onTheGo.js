import { StyleSheet, Text, View, Button, SectionList, Image, TouchableOpacity, TextInput, StatusBar, FlatList, RefreshControl, ScrollView, Pressable, } from "react-native";
import React, { useState } from 'react';
import { Link } from "expo-router";

import CountDown from "../utilities/countdown";


export default function OnTheGo({ navigation, route }) {

    const gotoRate = () => {
        navigation.navigate('RateUs')
    }

    const { deliveryTime } = route.params

    return (
        <View style={stylesOTG.body}>
            <StatusBar barStyle={'light-content'} />
            <Text style={stylesOTG.title}>Tiempo de Entrega</Text>
            {/* insert coundtdown here  */}
            <View style={{ margin: 50 }}>
                <CountDown
                    time={deliveryTime}
                    func={gotoRate}
                />
            </View>


            <Text style={stylesOTG.subtitle}>En unos momentos tu delicioso pedido llegará hasta tu puerta! {'\n'}si llegó antes:</Text>
            <TouchableOpacity
                style={stylesOTG.button}
                onPress={gotoRate}
            >
                <Text style={stylesOTG.buttonText}>presione aqui</Text>
            </TouchableOpacity>
        </View>
    );
}

const stylesOTG = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#221919',
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontSize: 48,
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: 50
    },
    subtitle: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 400,
        paddingRight: 400,
    },
    button: {
        width: 550,
        height: 90,
        backgroundColor: '#594b4b',
        borderRadius: 10,
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    },
    buttonText: {
        fontSize: 50,
        color: '#fff',
        fontWeight: 'bold'
    }
})