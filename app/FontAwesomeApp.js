import PropTypes from "prop-types";
import { Component } from "react";
import { Font } from "expo";

export default class FontAwesomeApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      awesome: require("./assets/fonts/fontawesome.ttf"), // eslint-disable-line global-require
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return this.props.children;
    }
    return null;
  }
}

FontAwesomeApp.propTypes = {
  children: PropTypes.element.isRequired,
};
