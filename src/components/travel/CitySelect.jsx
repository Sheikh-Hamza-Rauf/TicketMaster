import { Form } from 'react-bootstrap';
import { indianCities } from '../../data/cities';

function CitySelect({ label, value, onChange, excludeCity, required = true }) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Select a city</option>
        {indianCities
          .filter(city => city.code !== excludeCity)
          .map(city => (
            <option key={city.code} value={city.code}>
              {city.name}, {city.state}
            </option>
          ))}
      </Form.Select>
    </Form.Group>
  );
}

export default CitySelect;