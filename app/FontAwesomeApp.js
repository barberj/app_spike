import React, { Component } from "react";
import { Font } from "expo";

import ReduxApp from "./ReduxApp";

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
      return <ReduxApp />;
    }
    return null;
  }
}
