import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';



function DropDown(props) {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const data = [
        { label: 'OBRAJES', value: 1 },
        { label: 'CALACOTO', value: 2 },
        { label: 'ACHUMANI', value: 3 },
        { label: 'LOS PINOS', value: 4 },
        { label: 'IRPAVI', value: 5 },
        { label: 'MIRAFLORES', value: 6 },
        { label: 'SOPOCACHI', value: 7 },
        { label: 'PRADO', value: 8 },
        { label: 'PEREZ', value: 9 },
        { label: 'SAN PEDRO', value: 10 },
        { label: 'VILLA SAN ANTONIO', value: 11 },
        { label: 'TEMBLADERANI', value: 12 },

    ];

    const execute = (val) => {
        setValue(val)
        if (val == 1) {
            props.f1();
        } else if (val == 2) {
            props.f2();
        } else if (val == 3) {
            props.f3();
        } else if (val == 4) {
            props.f4();
        } else if (val == 5) {
            props.f5();
        } else if (val == 6) {
            props.f6();
        } else if (val == 7) {
            props.f7();
        } else if (val == 8) {
            props.f8();
        } else if (val == 9) {
            props.f9();
        } else if (val == 10) {
            props.f10();
        } else if (val == 11) {
            props.f11();
        } else if (val == 12) {
            props.f12();
        }
    }


    return (


        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}

            selectedTextStyle={styles.subtitle2}

            data={data}
            maxHeight={400}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Seleccione Zona:' : '...'}
            placeholderStyle={styles.subtitle2}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                execute(item.value)
                setIsFocus(false);
            }}

            itemTextStyle={styles.itemStyle}
            containerStyle={styles.listItemStyle}
            activeColor='#594b4b95'

        />



    );
};

export default DropDown;

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: '#594b4b',
        width: 608,
        height: 80,
        borderRadius: 10,
        marginTop: 35,
        marginLeft: 40,
        alignItems: 'center'
    },
    subtitle2: {
        fontSize: 27,
        paddingLeft: 25,
        fontWeight: "bold",
        color: "#fff"
    },
    itemStyle: {
        fontSize: 20,
        paddingLeft: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    listItemStyle: {

        backgroundColor: '#221919',
        opacity: 0.90,
        height: 400,
        width: 608,
        borderRadius: 10

    },
    selected: {
        backgroundColor: '#594b4b',
        height: 60,
        width: 600,
        borderRadius: 10

    },

});