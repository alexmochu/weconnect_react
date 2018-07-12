import React from "react";
import { Container, Message } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { Notifications } from "../messages/Notifications";
import LoginForm from "../forms/LoginForm";

class Login extends React.Component {
  componentDidMount() {
    Notifications();
  }

  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/businesses"));

  render() {
    const { isAuthenticated, message } = this.props;
    document.title = "weConnect | Login";
    return (
      <div>
        {!isAuthenticated ? (
          <Container text style={{ marginTop: "7em" }}>
            {message && (
              <Message positive className="semantic-message">
                <p>{message}</p>
              </Message>
            )}
            <h1>Login</h1>
            <LoginForm submit={this.submit} />
          </Container>
        ) : (
          <Redirect to="/search/businesses" />
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  login: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  message: PropTypes.string
};

export default Login;
