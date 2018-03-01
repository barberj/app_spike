import PropTypes from "prop-types";
import React from "react";
import { Text, View } from "react-native";

import BoldButton from "./BoldButton";

import styles from "./styles";

const TasksButton = ({ onPress }) => (
  <View style={styles.peopleButton}>
    <BoldButton onPress={onPress} >
      <Text style={styles.text}>
        <Text style={styles.faText}>&#xf08d;</Text>
      </Text>
    </BoldButton>
  </View>
);

TasksButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default TasksButton;
