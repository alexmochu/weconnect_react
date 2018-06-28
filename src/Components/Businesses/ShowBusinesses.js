import React from "react";
import { Link } from "react-router-dom";
import { Container, Message, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./ShowBusinesses.css";
import BusinessDetail from "../BusinessDetail/BusinessDetail";
import { Notifications } from "../messages/Notifications";

class ShowBusinesses extends React.Component {
  /*
    invoked immediately after a component 
    is mounted. render() will be called twice 
    */
  componentDidMount() {
    this.props.fetchBusinesses();
    Notifications();
  }

  render() {
    document.title = "weConnect | Business";
    const { businesses, message } = this.props;
    return (
      <div>
        <header>
          <div className="center">
            <h1>Businesses</h1>
            <p>
              Browse businesses, create businesses get involved in what you love{" "}
              <Icon name="heart" size="small" color="orange" />.
            </p>
          </div>
        </header>
        <Container style={{ marginTop: "1.5em" }}>
          <Container text>
            {message && (
              <Message positive className="semantic-message">
                <p>{message}</p>
              </Message>
            )}
          </Container>
          <div>
            {businesses.map(business => (
              <Link
                to={`/business/${business.business_id}`}
                key={business.business_id}
              >
                <BusinessDetail
                  owner={business.business_owner}
                  business={business.business}
                  location={business.business_location}
                  id={business.business_id}
                />
              </Link>
            ))}
          </div>
          <br />
        </Container>
      </div>
    );
  }
}

// typechecking validation
ShowBusinesses.propTypes = {
  fetchBusinesses: PropTypes.func,
  loading: PropTypes.bool,
  businesses: PropTypes.array,
  error: PropTypes.string,
  message: PropTypes.string
};

export default ShowBusinesses;
