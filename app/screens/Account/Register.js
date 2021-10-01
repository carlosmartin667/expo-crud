import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <View>
      <Image
        source={require("../../../assets/img/7.1 5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <RegisterForm />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});
export default Register;
