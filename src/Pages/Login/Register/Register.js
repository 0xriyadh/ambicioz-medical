import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import googleImg from '../../../images/icons/google.png';

const Register = () => {
    const { logInUsingGoogle, createAcWithEmailPw, updateUserProfile, verifyUserEmail, error } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        createAcWithEmailPw(email, password, name);
        // updateUserProfile(name);
    }

    const captureName = (e) => {
        setName(e.target.value);
    }
    const captureEmail = (e) => {
        setEmail(e.target.value);
    }
    const capturePassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div className="d-flex justify-content-center">
            <Container className="m-5">
                <h2>Please Create An Account</h2>
                <Form>
                <Form.Group className="mb-3 text-start" controlId="formGridAddress1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control onBlur={captureName} placeholder="Enter your full name" />
                </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={captureEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={capturePassword} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Text className="text-muted">
                        Already have an account? <Link to="./login">Log in</Link>
                    </Form.Text>
                    <br />
                    <br />
                    <Button onClick={handleRegistration} variant="dark" type="submit">
                    Create an Account
                    </Button>
                </Form>
                <br />
                <p>{error}</p>
                <Button onClick={logInUsingGoogle} variant="light"><img className="img-fluid" src={googleImg} alt="" /> Login With Google</Button>
            </Container>
        </div>
    );
};

export default Register;