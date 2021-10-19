import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutUsImg from '../../../images/AboutUs/AboutUs.jpg' 

const AboutUs = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Row xs={1} md={2} className="bg-light mt-5 p-3 container">     
            <Col>
                <img className="img-fluid" src={aboutUsImg} alt="" />
            </Col>

            <Col className="d-flex flex-column justify-content-center ">
                <h2>About Us</h2>
                <p className="text-start p-3">Ambicioz Medical is the number one healthcare data and analytics platform, delivering information on every care provider in the U.S. Based on 3 billion+ medical and Rx claims, the platform empowers users to analyze referral patterns, financial metrics, clinical data, HCAHPs scores, and other data on hospitals, physicians, medical groups, IDNs, surgery centers, long-term care facilities, and others. Request a free trial to explore the platform.</p>
            </Col>
            </Row>
        </div>
    );
};

export default AboutUs;