import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

export default () => (
  <View style={styles.container} >
    <View style={styles.border} />
    <Text> OR </Text>
    <View style={styles.border} />
  </View>
);
