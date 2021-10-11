import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "../screens/Restaurants/Restaurants";
import AddRestaurant from "../screens/Restaurants/AddRestaurant";

const Stack = createNativeStackNavigator();
const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurants"
        component={Restaurants}
        options={{ title: "restaurantes " }}
      />
      <Stack.Screen
        name="add-restaurant"
        component={AddRestaurant}
        options={{ title: "añadir nuevo restaurante " }}
      />
    </Stack.Navigator>
  );
};

export default RestaurantsStack;
