import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from '../auth/LoginModal';

function Navigation() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">TicketMaster</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/travel">Travel</Nav.Link>
          </Nav>
          <Nav>
            <Button 
              variant="outline-light" 
              className="me-2"
              onClick={() => setShowLogin(true)}
            >
              Login
            </Button>
            <Button 
              variant="primary"
              onClick={() => navigate('/register')}
            >
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
    </Navbar>
  );
}

export default Navigation;