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
  children: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default AvoidingKeyboardView;
