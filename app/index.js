import { StyleSheet, Text, View, Button, SectionList, Image, TouchableOpacity, TextInput, StatusBar, FlatList, RefreshControl, ScrollView, Pressable, } from "react-native";
import React, { useState } from 'react';
import { Link } from "expo-router";

import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/Login";
import CreateAccount from "./screens/createAcc";
import MainMenu from "./screens/mainMenu";
import AppAdressPay from "./screens/adressPay";
import OnTheGo from "./screens/onTheGo";
import RateUS from "./screens/rateUs";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent='true'>
      <Stack.Navigator
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          initialParams={{userName:' ',passwd:' '}}
        />
        <Stack.Screen
          name="CreateAcc"
          component={CreateAccount}
        />
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
        />
        <Stack.Screen
          name="AdressPay"
          component={AppAdressPay}
        />
        <Stack.Screen
          name="OnTheGo"
          component={OnTheGo}
        />
        <Stack.Screen
          name="RateUs"
          component={RateUS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;