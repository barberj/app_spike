import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import store from "./store";

import { AlertProvider } from "./components/Alert";
import Container from "./components/Container";
import Login from "./components/Login";

EStyleSheet.build({
  $white: "#FFFFFF",
  $grey: "#777777",
  $fontFamily: "Avenir Next",
  $blue: "#337ab7",
  $outline: 1,
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Container>
        <StatusBar />
        <Login />
      </Container>
    </AlertProvider>
  </Provider>
);
