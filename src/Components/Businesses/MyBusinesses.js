import React from "react";
import { Link } from "react-router-dom";
import { Container, Message } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./ShowBusinesses.css";
import UserBusinessDetail from "../BusinessDetail/UserBusinessDetail";
import { Notifications } from "../messages/Notifications";

class MyBusinesses extends React.Component {
  /*
    invoked immediately after a component 
    is mounted. render() will be called twice 
    */
  componentDidMount() {
    let userId = this.props.match.params.id;
    this.props.fetchmyBusinesses(userId);
    Notifications();
  }

  // makes call to delete event by id
  deleteBusiness(businessId) {
    this.props
      .deleteBusiness(businessId)
      .then(() =>
        this.props.history.push(`/user/${this.props.currentUserId}/events`)
      );
  }

  render() {
    document.title = "weConnect | My Businesses";
    const { businesses, deleted } = this.props;
    return (
      <div>
        <header className="my-businesses-header">
          <div className="center">
            <h1>My Businesses</h1>
            <p>Businesses you've created.</p>
          </div>
        </header>
        <Container style={{ marginTop: "1.5em" }}>
          <Container text>
            {deleted && (
              <Message positive className="semantic-message">
                <p>Business deleted successfully.</p>
              </Message>
            )}
          </Container>

          <div>
            {businesses.map(business => (
              <div>
                <Link
                  to={`/my/business/${business.business_id}`}
                  key={business.business_id}
                >
                  <UserBusinessDetail
                    owner={business.business_owner}
                    business={business.business}
                    location={business.business_location}
                    id={business.business_id}
                    category={business.business_category}
                  />
                </Link>
              </div>
            ))}
          </div>
          <br />
        </Container>
      </div>
    );
  }
}
// typechecking validation
MyBusinesses.propTypes = {
  match: PropTypes.object,
  businesses: PropTypes.array,
  fetchmyBusinesses: PropTypes.func,
  error: PropTypes.string,
  deleted: PropTypes.bool
};
export default MyBusinesses;
