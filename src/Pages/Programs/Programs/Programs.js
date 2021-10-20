import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Program from '../Program/Program';

const Programs = () => {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        fetch('./programs.json')
            .then(res => res.json())
            .then(data => setPrograms(data))
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <h1 className="mb-3">Our Recovery Programs</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    programs.map(program => <Program
                        key={program.id}
                        program={program}
                    ></Program>)
            ))}
            </Row>
        </div>
    );
};

export default Programs;