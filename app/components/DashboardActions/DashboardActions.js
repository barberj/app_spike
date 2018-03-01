import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import { PeopleButton, TasksButton } from "../Button";

import styles from "./styles";

const DashboardActions = props => (
  <View style={styles.container}>
    <View style={styles.action}>
      <PeopleButton onPress={props.peoplePress} />
    </View>
    <View style={styles.action}>
      <TasksButton onPress={props.tasksPress} />
    </View>
  </View>
);

DashboardActions.propTypes = {
  peoplePress: PropTypes.func.isRequired,
  tasksPress: PropTypes.func.isRequired,
};

export default DashboardActions;
