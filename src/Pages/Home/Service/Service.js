import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { name, fee, description, img, id } = service;
    const serviceDetailUrl = `/servicedetails/${id}`
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
                        <Link to={serviceDetailUrl}><Button>View Details</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;

