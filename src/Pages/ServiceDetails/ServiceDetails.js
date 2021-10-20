import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    const { services } = useServices();
    
    const { serviceId } = useParams();
    // console.log(serviceId)
    const service = services.find(s => s.id == serviceId);
    console.log(service)
    // const { img, name, fee, description } = service;
    return (
        <Card className="container my-5 py-5">
            <div className="row">
                <div className="col col-12 col-md-6"> 
                    <Card.Img className="img-fluid p-3" variant="top" src={service?.img}/>
                </div>
                <div className="col col-12 col-md-6 d-flex align-items-center">
                    <Card.Body>
                        <h2>{ service?.name }</h2>
                        <Card.Text>
                            {service?.description}
                        </Card.Text>
                        <Card.Text className="fs-3 fw-bold text-primary">
                            Fee: { service?.fee } Tk
                        </Card.Text>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
};

export default ServiceDetails;