import React from "react";
import { Card, Button, Label } from "semantic-ui-react";
import PropTypes from "prop-types";

import client from "../../client";
import "./BusinessDetail.css";

document.title = "weConnect | Business";

function BusinessDetail(props) {
  const business_id = props;
  client.get(`/api/v2/business/${business_id}`).then(res => {
    this.setState({ business: res.data });
  });
  return (
    <Card.Group>
      <Card key={business_id}>
        <Card.Content textAlign="center">
          <Card.Header>{props.business}</Card.Header>
          <Card.Description>
            Owned by <strong>{props.owner}</strong>
          </Card.Description>
          <Card.Meta>
            <Label>Location: {props.location}</Label>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Button animated="fade" color="red">
            <Button.Content visible>View Business Profile</Button.Content>
            <Button.Content hidden>and Reviews</Button.Content>
          </Button>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}

BusinessDetail.propTypes = {
  business: PropTypes.string,
  owner: PropTypes.string,
  location: PropTypes.string
};

export default BusinessDetail;
