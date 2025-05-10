import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "e98f1ab8788ace6267d8d06062438000";
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch movie details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container className="text-center mt-5">
        <p>Movie not found.</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
            alt={movie.title}
            fluid
          />
        </Col>
        <Col md={8}>
          <h2>{movie.title}</h2>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
