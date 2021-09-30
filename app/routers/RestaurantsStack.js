import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from '../screens/Restaurants';


const Stack = createNativeStackNavigator();
const RestaurantsStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Restaurants"
          component={Restaurants}
          options={{ title: "restaurantes " }}
        />
      </Stack.Navigator>
    );
}

export default RestaurantsStack
