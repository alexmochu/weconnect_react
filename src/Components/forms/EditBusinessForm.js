import React from "react";
import { Form, Button, Message } from "semantic-ui-react";
import PropTypes from "prop-types";
import InlineError from "../messages/InlineError";
import { Notifications } from "../messages/Notifications";

class EditBusinessForm extends React.Component {
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
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  /*
invoked just before mounting occurs. 
It is called before render()
*/
  componentWillMount = () => {
    this.setState({ data: this.props.business });
  };

  // handles form data submission.
  onSubmit = business => {
    business.preventDefault();
    const businessDetails = {
      ...this.state.data
    };
    this.props
      .submit(businessDetails)
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;
    const { business } = this.props;
    return (
      <Form onSubmit={this.onSubmit} className="Edit-event-form">
        {errors.error && (
          <Message negative onDismiss={this.handleDismis}>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.error}</p>
          </Message>
        )}
        <Form.Field error={!!errors.business} required>
          <label htmlFor="business">Business Name</label>
          <input
            type="text"
            id="business"
            name="business"
            placeholder="Business Name"
            defaultValue={business.business}
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
            placeholder="Business Location"
            defaultValue={business.business_location}
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
            placeholder="Business Category"
            defaultValue={business.business_category}
            onChange={this.onChange}
          />
          {errors.category && <InlineError text={errors.category} />}
        </Form.Field>
        <Button ui button color="green" size="large">
          Submit
        </Button>
      </Form>
    );
  }
}

// typechecking validation
EditBusinessForm.propTypes = {
  submit: PropTypes.func,
  match: PropTypes.func,
  business: PropTypes.object
};

export default EditBusinessForm;
