import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import EventCard from './EventCard';
import EventFilters from './EventFilters';
import { mockEvents } from '../../data/mockData';

function Events() {
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);
  const [filters, setFilters] = useState({
    city: '',
    category: '',
    date: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Apply filters to events
    let filtered = mockEvents;
    if (newFilters.city) {
      filtered = filtered.filter(event => event.city === newFilters.city);
    }
    if (newFilters.category) {
      filtered = filtered.filter(event => event.category === newFilters.category);
    }
    if (newFilters.date) {
      filtered = filtered.filter(event => event.date === newFilters.date);
    }
    setFilteredEvents(filtered);
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Upcoming Events</h1>
      <Row>
        <Col md={3}>
          <EventFilters filters={filters} onFilterChange={handleFilterChange} />
        </Col>
        <Col md={9}>
          <Row className="g-4">
            {filteredEvents.map(event => (
              <Col md={6} lg={4} key={event.id}>
                <EventCard event={event} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Events;