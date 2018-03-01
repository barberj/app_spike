import PropTypes from "prop-types";
import React from "react";
import { Text } from "react-native";

import BoldButton from "./BoldButton";

import styles from "./styles";

const FacebookButton = ({ onPress }) => (
  <BoldButton
    onPress={onPress}
    style={styles.signInButton}
  >
    <Text style={styles.text}>
      <Text style={styles.faText}>&#xf09a;</Text>
      &nbsp;Sign In with Facebook
    </Text>
  </BoldButton>
);

FacebookButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default FacebookButton;
