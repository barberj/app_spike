import React from "react";
import { View, TextInput } from "react-native";

import styles from "./styles";

export default props => (
  <View style={styles.container}>
    <TextInput
      style={styles.plainText}
      {...props}
    />
  </View>
);
