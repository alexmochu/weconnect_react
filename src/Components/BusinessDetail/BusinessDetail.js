import React from 'react';
import { Container, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import client from '../../client';
import './BusinessDetail.css';

document.title = 'weConnect | Business';

function BusinessDetail(props) {
    const business_id  = props;
    client.get(`/api/v2/business/${business_id}`).then(res => {
        this.setState({ event: res.data.event });
    });
    return(
        <Container text>
            <div className='business-detail'>
                <br/>
                <Card
                    fluid
                    link
                    header={props.title}
                    meta={props.date}
                    description={props.description}
                />
            </div>
        </Container>
    );
}

BusinessDetail.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string
};

export default BusinessDetail;