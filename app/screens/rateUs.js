import { StyleSheet, Text, View, Keyboard, TouchableOpacity, TextInput, StatusBar, TouchableWithoutFeedback} from "react-native";
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import Stars from "../utilities/stars";

export default function RateUS({ navigation }) {

    const gotoMain = () => {
        navigation.navigate('MainMenu')
    }

    function hideKeyboard() {
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback
            onPress={hideKeyboard}>
            <View
                style={stylesRateUs.body}>
                <StatusBar barStyle={'light-content'} />
                <View
                    style={stylesRateUs.greenCard}>
                    <FontAwesome5
                        name="check"
                        size={250}
                        color={'#fff'}
                        margin={10}
                    />
                    <Text style={stylesRateUs.greenCardText}>Se entregó el pedido de forma exitosa!!</Text>
                </View>
                {/* TODO: Insert 5 star rating */}

                <Stars />

                <Text style={stylesRateUs.calificanos}>¡Califícanos!</Text>
                <TextInput
                    style={stylesRateUs.reviewBox}
                    multiline
                    numberOfLines={5}
                    //onPressOut={()=>()}
                    placeholder="Escribe una reseña"
                    placeholderTextColor={'#c1c1c1'}

                />
                <Text
                    style={stylesRateUs.thankYou}>
                    Gracias por confiar en{' '}
                    <Text
                        style={stylesRateUs.tyItalic}>
                        Pedidos Hermanos!
                    </Text>
                </Text>
                <TouchableOpacity
                    style={stylesRateUs.button}
                    onPress={gotoMain}>
                    <Text style={stylesRateUs.buttonText}>Nuevo Pedido</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>



    );
}

const stylesRateUs = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#221919',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    greenCard: {
        width: 801,
        height: 323,
        backgroundColor: '#4cd924',
        margin: 25,
        borderRadius: 13,
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 10,
        alignItems: 'center',
        borderColor: '#c1c1c1',
        borderWidth: 1
    },
    greenCardText: {
        flex: 1,
        color: '#fff',
        fontSize: 45,
        fontStyle: 'italic',
        fontWeight: '800',
        paddingLeft: 20
    },
    calificanos: {
        fontSize: 32,
        color: '#c1c1c1',
        fontWeight: 'bold'
    },
    reviewBox: {
        width: 695,
        height: 104,
        backgroundColor: '#594b4b',
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 15,
        paddingTop: 10,
        margin: 35,
        fontSize: 18,
        color: '#fff',
        fontWeight:'bold'
    },
    thankYou: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        margin: 20
    },
    tyItalic: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    button: {
        width: 444,
        height: 88,
        backgroundColor: '#fdaf01',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        marginBottom: 70
    },
    buttonText: {
        fontSize: 49,
        color: '#fff',
        fontWeight: 'bold'
    }

})