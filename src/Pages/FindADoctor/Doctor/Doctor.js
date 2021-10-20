import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({doctor}) => {
    const { name, position, email, img } = doctor;
    return (
        <Col className="d-flex align-items-stretch">
            <Card>
                <Card.Img className="p-3" variant="top" src={img} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="fw-bold fs-4">
                        {position}
                        </Card.Text>
                    </div>
                    <div>
                        <Card.Text className="fw-bold">
                            Email: { email }
                        </Card.Text>
                        {/* <Link to={serviceDetailUrl}><Button>View Details</Button></Link> */}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;