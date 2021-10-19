import React from 'react';
import { Card, Col} from 'react-bootstrap';

const Review = ({review}) => {
    const { name, rating, words, img } = review;
    return (
        <Col className="d-flex align-items-stretch">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                        {words}
                        </Card.Text>
                    </div>
                    <div>
                        <Card.Text className="fs-5 text-danger mt-2">
                            Rating: { rating }
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;