import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "../screens/Restaurants";
import Account from "../screens/Account";

const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account Stack"
        component={Account}
        options={{ title: "Account Stack " }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
