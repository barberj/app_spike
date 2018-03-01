import PropTypes from "prop-types";
import React from "react";
import { Text } from "react-native";

import BoldButton from "./BoldButton";

import styles from "./styles";

const SignInButton = ({ onPress, disabled }) => (
  <BoldButton
    onPress={onPress}
    disabled={disabled}
    style={styles.signInButton}
  >
    <Text style={styles.text}>Sign In</Text>
  </BoldButton>
);

SignInButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

SignInButton.defaultProps = {
  disabled: true,
};

export default SignInButton;
