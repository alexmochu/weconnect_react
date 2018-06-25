import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";

import BusinessDetail from "../BusinessDetail/BusinessDetail";
import "./ShowBusinesses.css";
import { Notifications } from "../messages/Notifications";
class ShowBusinesses extends Component {
  /*
    invoked immediately after a component 
    is mounted. render() will be called twice 
    */
  componentDidMount() {
    this.props.fetchBusinesses();
    Notifications();
  }
  render() {
    document.title = "weConnect | Businesses";
    const { businesses } = this.props;
    return (
      <div>
        <header>
          <h1>Available Businesses</h1>
        </header>
        <Container style={{ marginTop: "1.5em" }}>
          {businesses.map(business => (
            <Link
              to={"/api/v2/business/" + business.business_id}
              key={business.business_id}
            >
              <BusinessDetail
                owner={business.business_owner}
                business={business.business}
                location={business.business_location}
              />
            </Link>
          ))}
        </Container>
      </div>
    );
  }
}
// typechecking validation
ShowBusinesses.propTypes = {
  fetchBusinesses: PropTypes.func
};

export default ShowBusinesses;
