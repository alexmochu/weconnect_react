import React from "react";
import { Form, Button, Message } from "semantic-ui-react";
import propTypes from "prop-types";

import InlineError from "../messages/InlineError";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        review: ""
      },
      errors: {}
    };
  }

  onChange = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });

  // handles form data submission.
  onSubmit = event => {
    event.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    console.log("review", this.state.data);
    if (Object.keys(errors).length === 0) {
      this.props
        .submit(this.state.data)
        .catch(err => this.setState({ errors: err.response.data }));
    }
  };

  handleDismis = () => {
    this.setState({ errors: {} });
  };

  // validate form data
  validate = data => {
    const errors = {};
    if (!data.review) errors.review = "Review can't be blank";

    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        {errors.error && (
          <Message negative onDismiss={this.handleDismis}>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.error}</p>
          </Message>
        )}
        <Form.Field error={!!errors.review} required>
          <input
            type="text"
            id="review"
            name="review"
            placeholder="Review Business Now"
            value={data.review}
            onChange={this.onChange}
          />
          {errors.review && <InlineError text={errors.review} />}
        </Form.Field>

        <Button ui button color="green" size="large">
          Submit
        </Button>
        {errors.review && <InlineError text={errors.review} />}
      </Form>
    );
  }
}

ReviewForm.propTypes = {
  submit: propTypes.func
};

export default ReviewForm;
