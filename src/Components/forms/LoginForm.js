import React from "react";
import { Form, Button, Message } from "semantic-ui-react";
import propTypes from "prop-types";

import InlineError from "../messages/InlineError";

class LoginForm extends React.Component {
  state = {
    data: {
      username: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = event => {
    event.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data, loading: false })
        );
    }
  };

  handleDismis = () => {
    this.setState({ errors: {} });
  };

  validate = data => {
    const errors = {};
    if (!data.username) errors.username = "Username can't be blank";
    if (!data.password) errors.password = "Password can't be blank";
    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit} className="login-form">
        {errors.error && (
          <Message negative onDismiss={this.handleDismis}>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.error}</p>
          </Message>
        )}
        <Form.Field error={!!errors.username}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={this.onChange}
          />
          {errors.username && <InlineError text={errors.username} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button ui="true" button="true">
          Submit
        </Button>
        <p>
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </Form>
    );
  }
}
LoginForm.propTypes = {
  submit: propTypes.func
};
export default LoginForm;
