import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";

const logoSrc = require("./images/logo.png");

export default () => (
  <View style={styles.container}>
    <Image resizeMode="contain" source={logoSrc} />
  </View>
);
