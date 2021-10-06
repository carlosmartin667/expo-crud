import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import InfoUser from "../../components/InfoUser";
import ImagePickerExample from "../../components/ImagePickerExample ";
import Picktur from "../../components/Picktur";
import AccountOptions from "../../components/AccountOptions";

const UserLogged = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setloading] = useState(false);
  const [LoadingText, setLoadingText] = useState("");
  const [realoadUserInfo, setRealoadUserInfo] = useState(false);
  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user);
    })();
    setRealoadUserInfo(false);
  }, [realoadUserInfo]);
  return (
    <View>
      {userInfo && <InfoUser userInfo={userInfo} />}
      <AccountOptions userInfo={userInfo} />
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnCloseSession}
        titleStyle={styles.btnCloseSessionText}
        onPress={() => firebase.auth().signOut()}
      />
      {/* <Loading text={LoadingText} isVisible={loading} /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  viewUserInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
  btnCloseSession: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnCloseSessionText: {
    color: "#00a680",
  },
});
export default UserLogged;
