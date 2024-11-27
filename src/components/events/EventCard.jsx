import { Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function EventCard({ event }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/confirmation/${event.id}`, {
      state: {
        bookingData: {
          type: 'event',
          ...event
        }
      }
    });
  };

  return (
    <Card className="h-100">
  
      <Card.Body>
        <Badge bg="primary" className="mb-2">{event.category}</Badge>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>
          <small className="text-muted">
            {event.date} • {event.time}<br />
            {event.venue}, {event.city}
          </small>
        </Card.Text>
        <Card.Text>
          {event.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">${event.price}</span>
          <Button variant="primary" onClick={handleBooking}>
            Book Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EventCard;