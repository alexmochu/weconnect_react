import React from "react";
import { Container, Card, Button, Label } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BusinessDetail.css";

document.title = "weConnect | Business";

const BusinessDetail = props => {
  return (
    <Container text>
      <div className="event-detail">
        <br />
        <Card.Group>
          <Card>
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
                <Link to={`/business/${props.id}`}>
                  <Button.Content visible>View Business Profile</Button.Content>
                  <Button.Content hidden>and Reviews</Button.Content>
                </Link>
              </Button>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </Container>
  );
};

// typechecking validation
BusinessDetail.propTypes = {
  business: PropTypes.string,
  owner: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.number
};

export default BusinessDetail;
