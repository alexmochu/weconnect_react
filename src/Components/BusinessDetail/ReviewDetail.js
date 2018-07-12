import React from "react";
import { Container, Card } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./BusinessDetail.css";

document.title = "weConnect | Reviews";

const ReviewDetail = props => {
  return (
    <Container text>
      <div className="business-detail">
        <br />
        <Card fluid>
          <Card.Content textAlign="center">
            <Card.Header content={props.review} />
            <Card.Meta>
              Owned by <strong>{props.reviewer}</strong>
            </Card.Meta>
          </Card.Content>
        </Card>
      </div>
    </Container>
  );
};

// typechecking validation
ReviewDetail.propTypes = {
  review: PropTypes.string,
  reviewer: PropTypes.string
};

export default ReviewDetail;
