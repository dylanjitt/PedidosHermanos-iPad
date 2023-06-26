import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

function AgeDropDown() {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const data = [
        
        { label: 'prefiero no decirlo', value: 3 },
        { label: 'FEMENINO', value: 2 },
        { label: 'MASCULINO', value: 1 },
        

    ];

    return (


        <Dropdown
            style={styles.minibox}
            data={data}
            maxHeight={180}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Seleccione' : '...'}
            placeholderStyle={styles.hintText}
            value={value}
            dropdownPosition='top'
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setValue(item.value)
                setIsFocus(false);
            }}

            itemTextStyle={styles.itemStyle}
            containerStyle={styles.listItemStyle}
            activeColor='#c1c1c1'

        />



    );
};

export default AgeDropDown;

const styles = StyleSheet.create({
    minibox: {
        width: 214,
        height: 64,
        backgroundColor: "#fff",
        justifyContent: "center",
        marginBottom: 30,
        fontSize: 18,
        paddingLeft: 15,
      },
      hintText: {
        fontSize: 18,
        color: "#c1c1c1",
        margin: 0
      },
    itemStyle: {
        fontSize: 18,
        color: "#000",
        margin: 0
    },
    listItemStyle: {

        backgroundColor: '#fff',
        height: 400,
        width: 214,


    },

});