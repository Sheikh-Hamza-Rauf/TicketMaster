import { Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/confirmation/${movie.id}`, {
      state: {
        bookingData: {
          type: 'movie',
          ...movie
        }
      }
    });
  };

  return (
    <Card className="h-100">
   
      <Card.Body>
        <Badge bg="secondary" className="mb-2">{movie.genre}</Badge>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          <small className="text-muted">
            {movie.language} • {movie.duration}<br />
            Release Date: {movie.releaseDate}
          </small>
        </Card.Text>
        <Card.Text>{movie.description}</Card.Text>
        <Button 
          variant="primary" 
          onClick={handleBooking}
          className="w-100"
        >
          Book Tickets
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;