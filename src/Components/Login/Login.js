import React from "react";
import { Container, Message } from "semantic-ui-react";
import PropTypes from "prop-types";

import { Notifications } from "../messages/Notifications";
import LoginForm from "../forms/LoginForm";

class Login extends React.Component {
  componentDidMount() {
    Notifications();
  }

  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/businesses"));

  render() {
    const { message } = this.props;
    document.title = "weConnect | Login";
    return (
      <div>
        <Container text style={{ marginTop: "7em" }}>
          {message && (
            <Message positive className="semantic-message">
              <p>{message}</p>
            </Message>
          )}
          <h1>Login</h1>
          <LoginForm submit={this.submit} />
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  login: PropTypes.func,
  message: PropTypes.string
};

export default Login;
