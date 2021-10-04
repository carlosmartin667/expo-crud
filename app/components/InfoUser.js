import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

const InfoUser = (props) => {
    const {
      userInfo: { uid, photoURL, displayName, email },
      toastRef,
      setLoading,
      setLoadingText,
    } = props;

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        containerStyle={styles.userInfoAvatar}
        source={
          photoURL
            ? { uri: photoURL }
            : require("../../assets/img/3.1 avatar-default.jpg")
        }
      />
      <View>
        <Text style={styles.displayName}>
          {" "}
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
