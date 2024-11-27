import { Form } from 'react-bootstrap';
import { genres, languages } from '../../data/mockData';

function MovieFilters({ filters, onFilterChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="mb-4">
      <h4>Filters</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Select
            name="genre"
            value={filters.genre}
            onChange={handleChange}
          >
            <option value="">All Genres</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Language</Form.Label>
          <Form.Select
            name="language"
            value={filters.language}
            onChange={handleChange}
          >
            <option value="">All Languages</option>
            {languages.map(language => (
              <option key={language} value={language}>{language}</option>
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

export default MovieFilters;