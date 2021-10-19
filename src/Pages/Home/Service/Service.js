import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Service = ({service}) => {
    const { name, fee, description, img } = service;
    return (
        <Col className="d-flex align-items-stretch">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                        {description}
                        </Card.Text>
                    </div>
                    <div>
                        <Card.Text className="fs-5 text-primary">
                            Fee: { fee } Tk
                        </Card.Text>
                        <Button>Check Out</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;

