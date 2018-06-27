import React from "react";
import { Form, Button, Message } from "semantic-ui-react";
import propTypes from "prop-types";

import InlineError from "../messages/InlineError";
import { Notifications } from "../messages/Notifications";

class CreateBusinessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        business: "",
        location: "",
        category: ""
      },
      errors: {}
    };
  }

  componentDidMount() {
    Notifications();
  }

  // handles form data state change
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
    console.log("business", this.state.data);
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
    if (!data.business) errors.business = "Business name can't be blank";
    if (!data.location) errors.location = "Location can't be blank";
    if (!data.category) errors.category = "Category can't be blank";

    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit} className="create-business-form">
        {errors.error && (
          <Message negative onDismiss={this.handleDismis}>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.error}</p>
          </Message>
        )}
        <Form.Field error={!!errors.businesss} required>
          <label htmlFor="business">Business Name</label>
          <input
            type="text"
            id="business"
            name="business"
            placeholder="Jah9 NBO"
            value={data.business}
            onChange={this.onChange}
          />
          {errors.business && <InlineError text={errors.business} />}
        </Form.Field>
        <Form.Field error={!!errors.location} required>
          <label htmlFor="location">Business Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Alchemist Bar"
            value={data.location}
            onChange={this.onChange}
          />
          {errors.location && <InlineError text={errors.location} />}
        </Form.Field>
        <Form.Field error={!!errors.category} required>
          <label htmlFor="category">Business Category</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="I & I Vibration"
            value={data.category}
            onChange={this.onChange}
          />
          {errors.category && <InlineError text={errors.category} />}
        </Form.Field>

        <Button ui="true" button="true" color="green" size="large">
          Submit
        </Button>
      </Form>
    );
  }
}

// typechecking validation
CreateBusinessForm.propTypes = {
  submit: propTypes.func
};

export default CreateBusinessForm;
