import React from "react";
import { Provider } from "react-redux";

import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet, Text, View } from "react-native";

import store from "./store";
import { AlertProvider } from "./components/Alert";

EStyleSheet.build({});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  faText: {
    alignItems: "center",
    fontFamily: "awesome",
    fontSize: 25,
    justifyContent: "center",
  },
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text style={styles.faText}>&#xf0c0;</Text>
      </View>
    </AlertProvider>
  </Provider>
);
