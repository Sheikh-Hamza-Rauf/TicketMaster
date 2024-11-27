import { useState } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CitySelect from './CitySelect';

function BusSearch() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1,
    busType: 'all'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/booking/confirmation/bus`, {
      state: {
        bookingData: {
          type: 'bus',
          ...searchData,
          title: 'Bus Booking',
          price: Math.floor(Math.random() * 1000) + 500
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
              <Form.Label>Travel Date</Form.Label>
              <Form.Control
                type="date"
                value={searchData.date}
                onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Passengers</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="6"
                value={searchData.passengers}
                onChange={(e) => setSearchData({...searchData, passengers: e.target.value})}
                required
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Bus Type</Form.Label>
              <Form.Select
                value={searchData.busType}
                onChange={(e) => setSearchData({...searchData, busType: e.target.value})}
              >
                <option value="all">All Types</option>
                <option value="ac">AC</option>
                <option value="nonac">Non AC</option>
                <option value="sleeper">Sleeper</option>
                <option value="seater">Seater</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Button type="submit" variant="primary" className="w-100">
              Book Buses
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default BusSearch;