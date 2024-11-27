import { useState } from 'react';
import { Container, Tabs, Tab, Alert } from 'react-bootstrap';
import FlightSearch from './FlightSearch';
import BusSearch from './BusSearch';
import PopularRoutes from './PopularRoutes';

function Travel() {
  const [key, setKey] = useState('flights');

  return (
    <Container className="py-5">
      <h1 className="mb-4">Travel Bookings</h1>
      
      <Alert variant="info" className="mb-4">
        <Alert.Heading>Travel Tips</Alert.Heading>
        <ul className="mb-0">
          <li>Book in advance for better prices</li>
          <li>Check multiple dates for best deals</li>
          <li>Compare different travel options</li>
        </ul>
      </Alert>

      <div className="row">
        <div className="col-md-8">
          <Tabs
            id="travel-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-4"
          >
            <Tab eventKey="flights" title="Flights">
              <FlightSearch />
            </Tab>
            <Tab eventKey="buses" title="Buses">
              <BusSearch />
            </Tab>
          </Tabs>
        </div>
        <div className="col-md-4">
          <PopularRoutes />
        </div>
      </div>
    </Container>
  );
}

export default Travel;