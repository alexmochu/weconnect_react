import React from "react";
import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import SignupForm from "../forms/SignupForm";
import { Notifications } from "../messages/Notifications";

class Signup extends React.Component {
  componentDidMount() {
    Notifications();
  }

  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/login"));

  render() {
    document.title = "weConnect | Signup";
    const { isAuthenticated } = this.props;
    return (
      <div style={{ marginTop: "7em" }}>
        <Container text>
          {!isAuthenticated ? (
            <div>
              <h1>Signup</h1>
              <SignupForm submit={this.submit} />
            </div>
          ) : (
            <Redirect to="/businesses" />
          )}
        </Container>
      </div>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  signup: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  message: PropTypes.string
};

export default Signup;
