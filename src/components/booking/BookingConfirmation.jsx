import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Card, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BookingConfirmation() {
  const [booking, setBooking] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const bookingData = location.state?.bookingData;

  useEffect(() => {
    if (bookingData) {
      // Simulate booking confirmation
      const confirmationDetails = {
        ...bookingData,
        bookingId: Math.random().toString(36).substr(2, 9),
        bookingDate: new Date().toLocaleDateString(),
        status: 'Confirmed'
      };
      setBooking(confirmationDetails);
    }
  }, [bookingData]);

  if (!booking) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          No booking information found. Please try again.
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card className="booking-confirmation">
        <Card.Body className="text-center">
          <div className="mb-4">
            <i className="fas fa-check-circle text-success" style={{ fontSize: '4rem' }}></i>
          </div>
          <Card.Title className="mb-4">Booking Confirmed!</Card.Title>
          <Alert variant="success">
            Your booking has been successfully confirmed.
          </Alert>
          
          <div className="booking-details mt-4">
            <h5>Booking Details</h5>
            <p><strong>Booking ID:</strong> {booking.bookingId}</p>
            <p><strong>Date:</strong> {booking.bookingDate}</p>
            <p><strong>Title:</strong> {booking.title}</p>
            {booking.date && <p><strong>Event/Show Date:</strong> {booking.date}</p>}
            {booking.time && <p><strong>Time:</strong> {booking.time}</p>}
            {booking.venue && <p><strong>Venue:</strong> {booking.venue}</p>}
            <p><strong>Status:</strong> {booking.status}</p>
          </div>

          <div className="mt-4">
            <Link to="/">
              <Button variant="primary" className="me-3">
                Return to Home
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BookingConfirmation;