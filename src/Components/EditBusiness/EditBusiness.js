import React from "react";
import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";

import EditBusinessForm from "../forms/EditBusinessForm";
import client from "../../client";

class EditBusiness extends React.Component {
  // intitialize state & bind methods
  constructor(props) {
    super(props);
    this.state = {
      businessDetails: {},
      loading: true
    };
  }

  /*
    invoked just before mounting occurs. 
    It is called before render()
    */
  componentWillMount = () => {
    this.getBusiness();
  };

  getBusiness() {
    const businessId = this.props.match.params.id;
    return client.get(`/api/v2/business/${businessId}`).then(res => {
      this.setState({ businessDetails: res.data.business, loading: false });
    });
  }

  submit = data =>
    this.props
      .editBusiness(this.props.match.params.id, data)
      .then(() =>
        this.props.history.push(`/my/business/${this.props.match.params.id}`)
      );

  render() {
    document.title = "weConnect | Edit Business";
    return (
      <div style={{ marginTop: "7em" }}>
        <Container text>
          <h1>Edit Business</h1>
          {this.state.loading === false && (
            <EditBusinessForm
              submit={this.submit}
              business={this.state.businessDetails}
            />
          )}
        </Container>
      </div>
    );
  }
}

// typechecking validation
EditBusiness.propTypes = {
  match: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  editBusiness: PropTypes.func
};

export default EditBusiness;
