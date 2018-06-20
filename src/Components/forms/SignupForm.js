import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import propTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';

import InlineError from '../messages/InlineError';

class SignupForm extends React.Component {
    state = {
        dataType: 'json',
        data: {
            username: '',
            email: '',
            password: '',
            confirm_password: ''
        },
        loading: false,
        errors: {}
    }

onChange = e => 
    this.setState({ 
        data: { ...this.state.data, [e.target.name]: e.target.value}
    });

onSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
        this.setState({ loading: true });
        this.props
            .submit(this.state.data)
            .catch(err => this.setState({ errors: err.response.data, loading: false }));
    }
};

validate = (data) => {
    const errors = {};
    if (!data.username) errors.username = 'Username can\'t be blank';
    if (!isEmail(data.email)) errors.email = 'Email can\'t be blank';    
    if (!data.password) errors.password = 'Password can\'t be blank';
    return errors;
}

render() {
    const { data, errors, loading } = this.state;
    return (
        <Form onSubmit={this.onSubmit} className="signup-form" loading={loading}>
            { errors.error && (
                <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.error}</p>
                </Message>
            )}
            <Form.Field error={!!errors.username} required>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    id="username" 
                    name="username" 
                    placeholder="Albert" 
                    value={data.username} 
                    onChange={this.onChange}
                />
                {errors.username && <InlineError text={errors.username} />}
            </Form.Field>
            <Form.Field error={!!errors.email} required>
                <label htmlFor="username">Email</label>
                <input 
                    type="email"
                    id="email" 
                    name="email" 
                    placeholder="albert@camus.com" 
                    value={data.email} 
                    onChange={this.onChange}
                />
                {errors.email && <InlineError text={errors.email} />}
            </Form.Field>
            <Form.Field error={!!errors.password} required>
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
            <Form.Field error={!!errors.confirm_password} required>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input 
                    type="password" 
                    name="confirm_password" 
                    id="confirm_password" 
                    placeholder="Confirm password" 
                    value={data.confirm_password}
                    onChange={this.onChange}
                />
                {errors.confirm_password && <InlineError text={errors.confirm_password} />}
            </Form.Field>
            <Button button="true">Submit</Button>
            <p>Already have an account? <a href="/api/v2/auth/login">Login</a></p>
        </Form>
    );
}
}

SignupForm.propTypes ={
    submit: propTypes.func.isRequired
};

export default SignupForm;