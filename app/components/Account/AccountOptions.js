import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Avatar, Icon, Badge } from "react-native-elements";
import { map } from "lodash";

const AccountOptions = ({ userInfo }) => {


  const selectedComponent = (key) => {
    console.log(key);
  };
const menuOptions = generateOptions(selectedComponent);
  return (
    <View style={styles.menuItem}>
      {menuOptions.map((item, index) => (
        <ListItem key={index} onPress={item.onPress}>
          <Icon
            name={item.iconNameLeft}
            type={item.iconType}
            color={item.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            name={item.iconNameRight}
            type={item.iconType}
            color={item.iconColorRight}
          />
        </ListItem>
      ))}
    </View>
  );
};
const generateOptions = (selectedComponent) => {
  return [
    {
      title: "Cambiar Nombre y Apellidos",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("displayName"),
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("email"),
    },
    {
      title: "Cambiar contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("password"),
    },
  ];
};

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
});
export default AccountOptions;
