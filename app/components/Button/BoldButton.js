import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, View } from "react-native";

import styles from "./styles";

const BoldButton = (props) => {
  const containerStyles = [styles.container];
  if (props.style) {
    containerStyles.push(props.style);
  }

  if (props.disabled) {
    containerStyles.push(styles.disabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        {...props}
        style={styles.content}
      >
        {props.children}
      </TouchableHighlight>
    </View>
  );
};

BoldButton.propTypes = {
  children: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

BoldButton.defaultProps = {
  style: undefined,
  disabled: false,
};

export default BoldButton;
