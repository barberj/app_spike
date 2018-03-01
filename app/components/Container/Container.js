import PropTypes from "prop-types";
import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

import styles from "./styles";

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;