import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "e98f1ab8788ace6267d8d06062438000";
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch movies:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="mb-4 text-center">Popular Movies</h2>
      <Row>
        {movies.map(movie => (
          <Col key={movie.id} md={4} lg={3} className="mb-4">
            <Card>
              <Link to={`/movies/${movie.id}`}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <Card.Body>
                <Card.Title className="text-center">{movie.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;
