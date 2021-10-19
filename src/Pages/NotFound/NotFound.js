import { Button } from 'react-bootstrap';
import React from 'react';
import error404Img from '../../images/NotFound/error404.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <img className="w-50" src={error404Img} alt="" />
            <br/>
            <Link to="/"><Button className="mb-5">Return Home</Button></Link>
        </div>
    );
};

export default NotFound;