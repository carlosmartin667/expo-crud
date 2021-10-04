import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button } from "react-native-elements";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

const InfoUser = (props) => {
  const {
    userInfo: { uid, photoURL, displayName, email },
    toastRef,
    setLoading,
    setLoadingText,
  } = props;
  state = {
    image: null,
  };
  
  const changeAvatar = async () => {
    const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    if (resultPermission !== "granted") {
      console.log("Sorry, we need camera roll permissions to make this work!");
    }
    // const resultPermissionCamera =
    //   resultPermission.permissions.cameraRoll.status;

    // if (resultPermissionCamera === "denied") {
    //   toastRef.current.show("Es necesario aceptar los permisos de la galeria");
    // } else {
    //   const result = await ImagePicker.launchImageLibraryAsync({
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //   });

    //   if (result.cancelled) {
    //     toastRef.current.show("Has cerrado la seleccion de imagenes");
    //   } else {
    //     uploadImage(result.uri)
    //       .then(() => {
    //         updatePhotoUrl();
    //       })
    //       .catch(() => {
    //         toastRef.current.show("Error al actualizar el avatar.");
    //       });
    //   }
    //}
  };

  const uploadImage = async (uri) => {
    setLoadingText("Actualizando Avatar");
    setLoading(true);

    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase.storage().ref().child(`avatar/${uid}`);
    return ref.put(blob);
  };

  const updatePhotoUrl = () => {
    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(async (response) => {
        const update = {
          photoURL: response,
        };
        await firebase.auth().currentUser.updateProfile(update);
        setLoading(false);
      })
      .catch(() => {
        toastRef.current.show("Error al actualizar el avatar.");
      });
  };

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        showAccessory
        onEditPress={changeAvatar}
        containerStyle={styles.userInfoAvatar}
        source={
          photoURL
            ? { uri: photoURL }
            : require("../../assets/img/3.1 avatar-default.jpg")
        }
      />
      <Button
        title="editar"
        onPress={changeAvatar}
        containerStyle={{ margin: 10 }}
      />

      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : "Anónimo"}
        </Text>
        <Text>{email ? email : "Socia Login"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
export default InfoUser;
