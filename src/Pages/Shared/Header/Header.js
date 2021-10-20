import React from 'react';
import { Container, Nav, Navbar, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="primary" />;
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Ambicioz Medical</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Find A Doctor</Nav.Link>
                        <Nav.Link as={Link} to="/recoveryPrograms">Recovery Programms</Nav.Link>
                        {user?.email ?
                            <Button variant="light" size="sm" onClick={logOut}>Log Out</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                    {
                        user?.email &&                     <Navbar.Text>
                            Signed in as: <Link to="/login">{user?.displayName}</Link>
                        </Navbar.Text>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;