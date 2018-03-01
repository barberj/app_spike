import PropTypes from "prop-types";
import React from "react";
import { Text, View } from "react-native";

import BoldButton from "./BoldButton";

import styles from "./styles";

const PeopleButton = ({ onPress }) => (
  <View style={styles.peopleButton}>
    <BoldButton onPress={onPress} >
      <Text style={styles.text}>
        <Text style={styles.faText}>&#xf0c0;</Text>
      </Text>
    </BoldButton>
  </View>
);

PeopleButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default PeopleButton;
