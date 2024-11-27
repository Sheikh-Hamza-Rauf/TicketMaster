// Home.js
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';  // Custom CSS for the homepage styling

function Home() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Implement subscription logic
    toast.success('Successfully subscribed to newsletter!');
    setEmail('');
  };

  // Handlers for navigation
  const handleExploreEvents = () => {
    navigate('/events');
  };

  const handleViewMovies = () => {
    navigate('/movies');
  };

  const handlePlanTravel = () => {
    navigate('/travel');
  };

  const handleGetStarted = () => {
    // Navigate to a specific route or perform an action
    navigate('/events'); // Example: Navigate to Events
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-white text-center py-5">
        <Container>
          <h1 className="hero-title">Your One-Stop Booking Platform</h1>
          <p className="lead hero-description">
            Discover and book tickets for events, movies, flights, and buses with ease.
          </p>
          <Button
            variant="outline-light"
            size="lg"
            className="mt-3 hero-button"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </Container>
      </div>

      {/* Categories Section */}
      <Container className="py-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="category-card">
              <Card.Body>
                <Card.Title>Events</Card.Title>
                <Card.Text>
                  Discover upcoming concerts, sports events, and more across different locations.
                </Card.Text>
                <Button variant="primary" onClick={handleExploreEvents}>
                  Explore Events
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="category-card">
              <Card.Body>
                <Card.Title>Movies</Card.Title>
                <Card.Text>
                  Book tickets for the latest movies in theaters. Stay updated with new releases.
                </Card.Text>
                <Button variant="primary" onClick={handleViewMovies}>
                  View Movies
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="category-card">
              <Card.Body>
                <Card.Title>Travel</Card.Title>
                <Card.Text>
                  Plan your next journey by booking flights and bus tickets all in one place.
                </Card.Text>
                <Button variant="primary" onClick={handlePlanTravel}>
                  Plan Travel
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Subscription Section */}
      <div className="subscription-section text-center mt-5 py-5">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest offers, events, and updates.</p>
        <Form onSubmit={handleSubscribe} className="d-flex justify-content-center">
          <Form.Group className="me-2" style={{ maxWidth: '350px' }}>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="subscription-input"
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="subscribe-button">
            Subscribe
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Home;
