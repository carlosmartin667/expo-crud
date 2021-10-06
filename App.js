import React from "react";
import { YellowBox } from "react-native";
import Navigations from "./app/routers/Navigations";
import { firebaseApp } from "./app/utils/firebase";
YellowBox.ignoreWarnings("Setting a timer");

export default function App() {
  return <Navigations />;
}
