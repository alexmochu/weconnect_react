import React, { Component } from "react";
import { Container, Message } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./BusinessItem.css";
import { Notifications } from "../messages/Notifications";

document.title = "weConnect Businesses | Business";

class BusinessItem extends Component {
  // intitialize state & bind methods
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      open: false
    };
  }

  /*
    invoked immediately after a component 
    is mounted. render() will be called twice 
    */
  componentDidMount() {
    console.log(this.props);
    let businessID = this.props.match.params.id;
    this.props.fetchBusiness(businessID);
    Notifications();
  }

  handleDismis = () => {
    this.setState({ errors: {} });
  };

  //toggles openning & closing of confirm delete modal
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { business } = this.props;
    console.log("business details", business);
    const { errors } = this.state;
    return (
      <div>
        <Container style={{ marginTop: "2em" }}>
          {errors.error && (
            <Message negative size="small" onDismiss={this.handleDismis}>
              <Message.Header>Something went wrong</Message.Header>
              <p>{errors.error}</p>
            </Message>
          )}
          <div className="business-details">
            <h1>Businesses Item </h1>
            <br />
            <h1>{business.created}</h1>
          </div>
        </Container>
        <br />
      </div>
    );
  }
}

// typechecking validation
BusinessItem.propTypes = {
  match: PropTypes.object,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  fetchBusiness: PropTypes.func,
  business: PropTypes.object
};

export default BusinessItem;
