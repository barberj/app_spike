import React from "react";
import PropTypes from "prop-types";
import { KeyboardAvoidingView } from "react-native";

import styles from "./styles";

const AvoidingKeyboardView = props => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    { props.children }
  </KeyboardAvoidingView>
);

AvoidingKeyboardView.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AvoidingKeyboardView;
