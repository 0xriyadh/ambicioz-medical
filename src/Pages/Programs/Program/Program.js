import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Program = ({program}) => {
    const { name, duration, details, img } = program;
    return (
        <Col className="d-flex align-items-stretch">
            <Card>
                <Card.Img className="p-3" variant="top" src={img} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text title={details}>
                        {details.split('', 200)} . . .
                        </Card.Text>
                    </div>
                    <div>
                        <Card.Text className="fw-bold text-primary">
                            Program Duration: { duration } Months
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Program;