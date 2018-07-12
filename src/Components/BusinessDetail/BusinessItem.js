import React, { Component } from "react";
import {
  Container,
  Button,
  Card,
  Label,
  Divider,
  Item
} from "semantic-ui-react";
import PropTypes from "prop-types";
import { Notifications } from "../messages/Notifications";

document.title = "weConnect | Business";

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
    let businessId = this.props.match.params.id;
    this.props.fetchBusiness(businessId);
    this.props.fetchReviews(businessId);
    Notifications();
  }

  // makes call to delete business by id
  deleteBusiness(businessId) {
    this.props
      .deleteBusiness(businessId)
      .then(() =>
        this.props.history.push(`/user/${this.props.currentUserId}/businesss`)
      );
  }

  handleDismis = () => {
    this.setState({ errors: {} });
  };

  //toggles openning & closing of confirm delete modal
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    console.log("dfghjklkjhgf", this.props.reviews);
    const { business } = this.props;
    return (
      <div>
        <header>
          <div className="center">
            <h1>Business Profile</h1>
          </div>
        </header>
        <Container style={{ marginTop: "1.5em" }}>
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
              <Card.Content textAlign="center" style={{ marginTop: "1.5em" }}>
                <Divider inverted />
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

              <Card.Content textAlign="center" style={{ marginTop: "1.5em" }}>
                <a href={"/review/business/" + business.business_id}>
                  <Button
                    icon="edit"
                    content="REVIEW BUSINESS"
                    className="review-btn"
                  />
                </a>
              </Card.Content>
            </Card.Content>
          </Card>
        </Container>
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
  business: PropTypes.object,
  deleteBusiness: PropTypes.func
};

export default BusinessItem;
