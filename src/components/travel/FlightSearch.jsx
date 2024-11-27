import { useState } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CitySelect from './CitySelect';

function FlightSearch() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: 1,
    class: 'economy'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/booking/confirmation/flight`, {
      state: {
        bookingData: {
          type: 'flight',
          ...searchData,
          title: 'Flight Booking',
          price: Math.floor(Math.random() * 10000) + 3000
        }
      }
    });
  };

  return (
    <Card className="p-4">
      <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={6}>
            <CitySelect
              label="From"
              value={searchData.from}
              onChange={(e) => setSearchData({...searchData, from: e.target.value})}
              excludeCity={searchData.to}
            />
          </Col>
          <Col md={6}>
            <CitySelect
              label="To"
              value={searchData.to}
              onChange={(e) => setSearchData({...searchData, to: e.target.value})}
              excludeCity={searchData.from}
            />
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Departure Date</Form.Label>
              <Form.Control
                type="date"
                value={searchData.departDate}
                onChange={(e) => setSearchData({...searchData, departDate: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Return Date (Optional)</Form.Label>
              <Form.Control
                type="date"
                value={searchData.returnDate}
                onChange={(e) => setSearchData({...searchData, returnDate: e.target.value})}
                min={searchData.departDate || new Date().toISOString().split('T')[0]}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Passengers</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="9"
                value={searchData.passengers}
                onChange={(e) => setSearchData({...searchData, passengers: e.target.value})}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Class</Form.Label>
              <Form.Select
                value={searchData.class}
                onChange={(e) => setSearchData({...searchData, class: e.target.value})}
                required
              >
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Button type="submit" variant="primary" className="w-100">
              Book Flights
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default FlightSearch;