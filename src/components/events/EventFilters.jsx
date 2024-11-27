import { Form } from 'react-bootstrap';
import { cities, categories } from '../../data/mockData';

function EventFilters({ filters, onFilterChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="mb-4">
      <h4>Filters</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Select
            name="city"
            value={filters.city}
            onChange={handleChange}
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            value={filters.category}
            onChange={handleChange}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={filters.date}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default EventFilters;