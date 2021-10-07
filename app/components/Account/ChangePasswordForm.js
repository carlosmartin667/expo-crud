import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements';

const ChangePasswordForm = (props) => {
 const { setShowModal, toastRef } = props;
 const [showPassword, setShowPassword] = useState(false);
 const [formData, setFormData] = useState(defualtValue());
 const [errors, setErrors] = useState({});
 const [isLoading, setIsLoading] = useState(false);



  return (
    <View style={styles.view}>
      <Input
        placeholder="Contraseña actual"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: () => setShowPassword(!showPassword),
        }}
        onChange={(e) => onChange(e, "password")}
        // errorMessage={error}
      />
      <Button
        title="Cambiar contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        // onPress={onSubmit}
        // loading={isLoading}
      />
    </View>
  );
};
const defualtValue=()=> {
  return {
    password: "",
    newPassword: "",
    repeatNewPassword: "",
  };
}
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

export default ChangePasswordForm
