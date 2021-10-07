import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
const ChangeEmailForm = (props) => {
  const { email, setShowModal, toastRef, setRealoadUserInfo } = props;
//   const [formData, setFormData] = useState(defaultValue());
//   const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.view}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        defaultValue={email || ""}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#c2c2c2",
        }}
       
        onChange={(e) => setNewDisplayName(e.nativeEvent.text)}
        // errorMessage={error}
      />
      <Button
        title="Cambiar email"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        // onPress={onSubmit}
        // loading={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
  btn: {
    backgroundColor: "#00a680",
  },
});

export default ChangeEmailForm;
