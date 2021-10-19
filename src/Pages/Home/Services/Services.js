import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <h1 className="mb-3">Our Services</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
            ))}
            </Row>
        </div>
    );
};

export default Services;