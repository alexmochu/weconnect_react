import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Grid, Card } from "semantic-ui-react";
import propTypes from "prop-types";

import BusinessDetail from "../BusinessDetail/BusinessDetail";
import client from "../../client";
import "./SearchBusinesses.css";

class SearchBusinesses extends React.Component {
  state = {
    searchedBusinesses: [],
    data: {
      searchParameter: "",
      searchLocation: "",
      searchCategory: "",
      errors: {}
    }
  };
  // handles form data state change
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  // handles form data submission.
  onSubmit = () => {
    let searchParameter = this.state.data.searchParameter;
    let searchLocation = this.state.data.searchLocation;
    let searchCategory = this.state.data.searchCategory;
    console.log("location", searchLocation);
    if (searchParameter || searchLocation || searchCategory) {
      this.setState({ searchedBusinesses: [] });
      client
        .get(
          `/api/v2/search?q=${searchParameter}&location=${searchLocation}&category=${searchCategory}`
        )
        .then(res => {
          this.setState({ searchedBusinesses: res.data.Businesses });
        });
    } else if (searchParameter) {
      this.setState({ searchedBusinesses: [] });
      client.get(`/api/v2/search?q=${searchParameter}`).then(res => {
        this.setState({ searchedBusinesses: res.data.Businesses });
      });
    }
    this.setState({
      data: {
        businessName: ""
      }
    });
  };

  // validate form data
  validate = data => {
    const errors = {};
    if (!data.businessName)
      errors.businessName = "Business Name can't be blank";
    return errors;
  };

  render() {
    document.title = "weConnect | Search Businesses";
    const { data } = this.state;
    return (
      <div>
        <header class="searched-businesses-header">
          <div className="center">
            <h1>Search Businesses</h1>
            <p>Search for businesses by Business name, Location and Category</p>
          </div>
        </header>
        <Container style={{ marginTop: "2em" }} textAlign="center">
          <div className="center">
            <Form size="large">
              <Grid>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <input
                      type="text"
                      id="searchParameter"
                      name="searchParameter"
                      placeholder="Search for a business."
                      value={data.searchParameter}
                      onChange={this.onChange}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <input
                      type="text"
                      id="searchLocation"
                      name="searchLocation"
                      placeholder="Filter by Location."
                      value={data.searchLocation}
                      onChange={this.onChange}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <input
                      type="text"
                      id="searchCategory"
                      name="searchCategory"
                      placeholder="Filter by Category."
                      value={data.searchCategory}
                      onChange={this.onChange}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Card.Content textAlign="center" style={{ marginTop: "1.5em" }}>
                <Button
                  ui
                  button
                  onClick={this.onSubmit}
                  color="orange"
                  size="large"
                >
                  SEARCH
                </Button>
              </Card.Content>
            </Form>
            <form className="form-inline" onSubmit={this.handleSearch} />
          </div>
          <div>
            {this.state.searchedBusinesses.map(business => (
              <Link
                to={`/business/${business.business_id}`}
                key={business.business_id}
              >
                <BusinessDetail
                  owner={business.owner}
                  business={business.business_name}
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
SearchBusinesses.propTypes = {
  submit: propTypes.func
};

export default SearchBusinesses;
