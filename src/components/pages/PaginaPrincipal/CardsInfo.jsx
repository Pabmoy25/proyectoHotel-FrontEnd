import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PaginaPrincipal.css";


const CardsInfo= ({ image, title, description }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);


export default CardsInfo;
