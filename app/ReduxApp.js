import React from "react";
import PropTypes from "prop-types";
import { Provider, connect } from "react-redux";
import { WebView } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import store from "./store";

import { AlertProvider } from "./components/Alert";
import Login from "./components/Login";

EStyleSheet.build({
  $white: "#FFFFFF",
  $grey: "#777777",
  $fontFamily: "Avenir Next",
  $blue: "#337ab7",
  $outline: 1,
});

const WebViewWrapper = () => (
  <WebView
    source={{
      uri: "http://localhost:8080/",
    }}
    style={{ marginTop: 20 }}
  />
);

const ReduxApp = (props) => {
  const { isLoggedIn } = props;

  return (
    <AlertProvider>
      { !isLoggedIn ? <Login /> : <WebViewWrapper /> }
    </AlertProvider>
  );
};

const mapStateToProps = state => (
  {
    isLoggedIn: state.isLoggedIn,
  }
);

ReduxApp.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const ConnectedReduxApp = connect(mapStateToProps)(ReduxApp);

export default () => (
  <Provider store={store}>
    <ConnectedReduxApp />
  </Provider>
);
