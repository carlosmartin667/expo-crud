import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "../screens/Restaurants";
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";


const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountStack"
        component={Account}
        options={{ title: "Account Stack " }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "iniciar seccion " }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
