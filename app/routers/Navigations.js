import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurants from "../screens/Restaurants";
import Account from "../screens/Account";
import Favorites from "../screens/Favorites";
import Search from "../screens/Search";
import TopRestaurans from "../screens/TopRestaurans";

const Tab = createBottomTabNavigator();
const Navigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Restaurants"
          component={Restaurants}
          options={{ title: "restaurantes " }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{ title: "account " }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{ title: "favoritos " }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{ title: "Buscar " }}
        />
        <Tab.Screen
          name="TopRestaurans"
          component={TopRestaurans}
          options={{ title: "top restaurantes " }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
