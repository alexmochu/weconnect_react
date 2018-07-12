import React, { Component } from "react";
import {
  Container,
  Button,
  Message,
  Confirm,
  Card,
  Divider,
  Item,
  Label
} from "semantic-ui-react";
import PropTypes from "prop-types";

import { Notifications } from "../messages/Notifications";

document.title = "weConnect | Business";

class MyBusinessItem extends Component {
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
    let businessId = this.props.match.params.id;
    this.props.fetchBusiness(businessId);
    Notifications();
    this.props.fetchReviews(businessId);
  }

  // makes call to delete business by id
  deleteBusiness(businessId) {
    this.props
      .deleteBusiness(businessId)
      .then(() => this.props.history.push("/businesses"));
  }

  handleDismis = () => {
    this.setState({ errors: {} });
  };

  //toggles openning & closing of confirm delete modal
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { business, message } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <header>
          <div className="center">
            <h1>My Business Item</h1>
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
          <Confirm
            open={this.state.open}
            onCancel={this.close}
            onConfirm={() => this.deleteBusiness(business.business_id)}
            cancelButton="Never mind"
            confirmButton="Delete Business"
          />

          <Card fluid>
            <Card.Content textAlign="center">
              <div className="center">
                <h1>
                  Business name:
                  {business.business}
                </h1>
                <p>
                  <Label color="yellow">Location: </Label>
                  {business.business_location}{" "}
                  <Label color="olive">Category: </Label>
                  {business.business_category}
                </p>
              </div>
              <p style={{ marginTop: "1.5em" }}>
                <a href={"/edit/business/" + business.business_id}>
                  <Button
                    icon="edit"
                    content="EDIT BUSINESS"
                    className="review-btn"
                  />
                </a>
                <Button
                  icon="delete"
                  negative
                  content="DELETE BUSINESS"
                  onClick={this.open}
                  className="review-btn"
                />
              </p>
            </Card.Content>

            <Card.Content textAlign="center" style={{ marginTop: "1.5em" }}>
              <Divider horizontal>Business Reviews </Divider>
              <Item.Group>
                {this.props.reviews.map(review => (
                  <Item>
                    <Item.Content>
                      <Item.Header as="a">
                        {" "}
                        <Label as="a" color="red" ribbon>
                          Reviewer :
                        </Label>
                        {review.reviewer}
                      </Item.Header>
                      <Item.Description>
                        <p>{review.review}</p>
                      </Item.Description>
                    </Item.Content>
                  </Item>
                ))}
              </Item.Group>
            </Card.Content>
          </Card>
        </Container>
      </div>
    );
  }
}

// typechecking validation
MyBusinessItem.propTypes = {
  match: PropTypes.object,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  fetchBusiness: PropTypes.func,
  business: PropTypes.object,
  deleteBusiness: PropTypes.func,
  message: PropTypes.string
};

export default MyBusinessItem;
