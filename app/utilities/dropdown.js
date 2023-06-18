import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';



function DropDown(props) {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const data = [
        { label: 'Item 1', value: 1 ,fun: props.f1},
        { label: 'Item 2', value: 2 ,fun: props.f2},
        { label: 'Item 3', value: 3 ,fun: props.f3},
        
    ];

    // const data2 = [
    //     {label:'OBRAJES', fun: props.f1 },
    //     {label:'CALACOTO', fun: props.f2 },
    //     {label:'ACHUMANI', fun: props.f3 },
    //     {label:'LOS PINOS', fun: props.f4 },
    //     {label:'IRPAVI', fun: props.f5 },
    //     {label:'MIRAFLORES', fun: props.f6 },
    //     {label:'SOPOCACHI', fun: props.f7 },
    //     {label:'PRADO', fun: props.f8 },
    //     {label:'PEREZ', fun: props.f9 },
    //     {label:'SAN PEDRO', fun: props.f10 },
    //     {label:'VILLA SAN ANTONIO', fun: props.f11 },
    //     {label:'TEMBLADERANI', fun: props.f12 },
    // ]

    const execute = (val) => {
        setValue(val)
        if(val==1){
            props.f1
        }else if (val==2){
            props.f2
        }
    }

    



    return (

        <>
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
                    item.fun
                    execute(item.value)
                    //setValue(item.value);
                    setIsFocus(false);
                    execute
                    
                }}
                onConfirmSelectItem={execute}
                itemTextStyle={styles.itemStyle}
                containerStyle={styles.listItemStyle}
                activeColor='#594b4b95'

            />
            <Text style={{ color: '#fff' }}>{value}</Text>
        </>

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
        opacity:0.90,
        height:400,
        width: 608,
        borderRadius:10
        
    },
    selected: {   
        backgroundColor: '#594b4b',
        height:60,
        width: 600,
        borderRadius:10
        
    },


});