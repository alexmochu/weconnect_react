import React from "react";
import { Container, Message } from "semantic-ui-react";
import PropTypes from "prop-types";

import SignupForm from "../forms/SignupForm";
import { Notifications } from "../messages/Notifications";

class Signup extends React.Component {
  componentDidMount() {
    Notifications();
  }

  submit = data =>
    this.props
      .signup(data)
      .then(() => this.props.history.push("/api/v2/auth/login"));

  render() {
    const { message } = this.props;
    document.title = "weConnect | Signup";
    return (
      <div style={{ marginTop: "7em" }}>
        <Container text>
          {message && (
            <Message positive className="semantic-message">
              <p>{message}</p>
            </Message>
          )}
          <h1>Signup</h1>
          <SignupForm submit={this.submit} />
        </Container>
      </div>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired,
  message: PropTypes.string
};

export default Signup;
