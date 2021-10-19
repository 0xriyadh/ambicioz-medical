import { Button } from 'react-bootstrap';
import React from 'react';
import error404Img from '../../images/NotFound/error404.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <img className="w-75" src={error404Img} alt="" />
            <br/>
            <Link to="/"><Button>Return Home</Button></Link>
        </div>
    );
};

export default NotFound;