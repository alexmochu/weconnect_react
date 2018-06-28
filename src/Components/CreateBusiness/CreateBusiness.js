import React from "react";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createBusiness } from "../../actions/businesses.actions";
import CreateBusinessForm from "../forms/CreateBusinessForm";

export class CreateBusiness extends React.Component {
  // makes call to create business
  submit = business_item =>
    this.props.createBusiness(business_item).then(business => {
      this.props.history.push("/api/v2/business/");
    });

  render() {
    document.title = "weConnect | Create Business";
    return (
      <div style={{ marginTop: "7em" }}>
        <Container text>
          <h1>Create Business</h1>
          <CreateBusinessForm submit={this.submit} />
        </Container>
      </div>
    );
  }
}

// typechecking validation
CreateBusiness.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  createBusiness: PropTypes.func,
  message: PropTypes.string
};

export default connect(
  null,
  { createBusiness }
)(CreateBusiness);
