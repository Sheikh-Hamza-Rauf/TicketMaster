import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import MovieFilters from './MovieFilters';
import { mockMovies } from '../../data/mockData';

function Movies() {
  const [filteredMovies, setFilteredMovies] = useState(mockMovies);
  const [filters, setFilters] = useState({
    genre: '',
    language: '',
    date: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    let filtered = mockMovies;
    if (newFilters.genre) {
      filtered = filtered.filter(movie => movie.genre === newFilters.genre);
    }
    if (newFilters.language) {
      filtered = filtered.filter(movie => movie.language === newFilters.language);
    }
    if (newFilters.date) {
      filtered = filtered.filter(movie => movie.date === newFilters.date);
    }
    setFilteredMovies(filtered);
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Movies</h1>
      <Row>
        <Col md={3}>
          <MovieFilters filters={filters} onFilterChange={handleFilterChange} />
        </Col>
        <Col md={9}>
          <Row className="g-4">
            {filteredMovies.map(movie => (
              <Col md={6} lg={4} key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Movies;