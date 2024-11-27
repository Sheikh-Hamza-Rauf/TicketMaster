import { Card, ListGroup } from 'react-bootstrap';
import { popularRoutes, indianCities } from '../../data/cities';

function PopularRoutes() {
  const getCityName = (code) => {
    const city = indianCities.find(city => city.code === code);
    return city ? city.name : code;
  };

  return (
    <Card className="mb-4">
      <Card.Header>
        <h5 className="mb-0">Popular Routes</h5>
      </Card.Header>
      <ListGroup variant="flush">
        {popularRoutes.map((route, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <div>
              <span className="fw-bold">{getCityName(route.from)}</span>
              <span className="mx-2">→</span>
              <span className="fw-bold">{getCityName(route.to)}</span>
            </div>
            <span className="text-muted">{route.duration}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default PopularRoutes;