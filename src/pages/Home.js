import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center my-5">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3375/3375105.png"
        alt="Movie Icon"
        width="150"
        className="mb-4"
      />
      <h1>Welcome to Omars Movies Explorer</h1>
      <p className="lead">Browse popular movies and discover what’s trending!</p>
    </Container>
  );
};

export default Home;
