import React from "react";
import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";

import ReviewForm from "../forms/ReviewForm";
import client from "../../client";

class ReviewBusiness extends React.Component {
  // intitialize state & bind methods
  constructor(props) {
    super(props);
    this.state = {
      reviewDetails: {},
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
      .createReview(this.props.match.params.id, data)
      .then(() =>
        this.props.history.push(`/business/${this.props.match.params.id}`)
      );

  render() {
    document.title = "weConnect | Edit Business";
    return (
      <div style={{ marginTop: "7em" }}>
        <Container text>
          <h1>Review Business</h1>
          {this.state.loading === false && <ReviewForm submit={this.submit} />}
        </Container>
      </div>
    );
  }
}

// typechecking validation
ReviewBusiness.propTypes = {
  match: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  createReview: PropTypes.func
};

export default ReviewBusiness;
