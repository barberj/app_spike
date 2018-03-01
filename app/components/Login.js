import React, { Component } from "react";
import PropTypes from "prop-types";
import { StatusBar } from "react-native";

import { connect } from "react-redux";
import { connectAlert } from "./Alert";

import Container from "./Container";
import { PlainTextInput } from "./TextInput";
import { FacebookButton, SignInButton } from "./Button";
import KeyboardAvoidingView from "./KeyboardAvoidingView";
import Logo from "./Logo";
import { OrSeparator } from "./Separator";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null };
  }

  handleEmail = (input) => {
    this.setState({ email: input });
  }

  handlePassword = (input) => {
    this.setState({ password: input });
  }

  signInDisabled = () => (
    !this.state.email || !this.state.password
  )

  handleError = () => {
    this.props.alertWithType("error", "Sorry!", "There were problems logging in. Verify your email and password and please try again.");
    this.setState({ password: null });
  }

  handleSignIn = () => {
    console.log("Email Sign In!");
    // this.props.dispatch(authorize(this.state.email, this.state.password, this.handleError));
  }

  handleFbSignIn = () => {
    console.log("Fb Sign In!");
  }

  render() {
    return (
      <Container>
        <StatusBar />
        <KeyboardAvoidingView>
          <Logo />
          <PlainTextInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={this.handleEmail}
          />
          <PlainTextInput
            placeholder="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={this.handlePassword}
          />
          <SignInButton
            disabled={this.signInDisabled()}
            onPress={this.handleSignIn}
          />
        </KeyboardAvoidingView>
        <OrSeparator />
        <FacebookButton onPress={this.handleFbSignIn} />
      </Container>
    );
  }
}

Login.propTypes = {
  alertWithType: PropTypes.func.isRequired,
};

export default connect()(connectAlert(Login));
