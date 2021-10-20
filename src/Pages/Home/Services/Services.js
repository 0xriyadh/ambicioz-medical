import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices();

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