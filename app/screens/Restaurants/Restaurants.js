import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Restaurants = (props) => {
  const { navigation } = props;
  const [user, setUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [totalResaturants, setTotalResaturants] = useState(0);
  const [startRestaurants, setStartRestaurants] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const limitRestaurants = 10;

  return (
    <View style={styles.viewBody}>
      <Text>Restaurants Restaurants2</Text>

      <Icon
        reverse
        type="material-community"
        name="plus"
        color="#00a680"
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("add-restaurant")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
});
export default Restaurants;
