import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurants from "../screens/Restaurants";
import Account from "../screens/Account";
import Favorites from "../screens/Favorites";
import Search from "../screens/Search";
import TopRestaurans from "../screens/TopRestaurans";
import RestaurantsStack from "./RestaurantsStack";
import AccountStack from "./AccountStack";
import FavoritesStack from "./FavoritesStack";
import SearchStack from "./SearchStack";
import TopRestauransStack from "./TopRestauransStack";

const Tab = createBottomTabNavigator();
const Navigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsStack}
          options={{ title: "restaurantes " }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{ title: "account " }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{ title: "favoritos " }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{ title: "Buscar " }}
        />
        <Tab.Screen
          name="TopRestaurans"
          component={TopRestauransStack}
          options={{ title: "top restaurantes " }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
