import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const RegisterForm = () => {
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="correo electronico"
        containerStyle={styles.inputForm}
      />
      <Input
        placeholder="contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
      />
      <Input
        placeholder="reoetir contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
export default RegisterForm;
