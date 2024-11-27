import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Your one-stop platform for booking tickets for events, movies, flights, and buses.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/events" className="text-light">Events</Link></li>
              <li><Link to="/movies" className="text-light">Movies</Link></li>
              <li><Link to="/travel" className="text-light">Travel</Link></li>
              <li><Link to="/contact" className="text-light">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>Email: support@ticketmaster.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Booking Street, NY 10001</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2024 TicketMaster. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;