import React from "react";
import { Row, Col, Button, Card, Container } from "react-bootstrap";
import {useLocation} from 'react-router-dom'

export default function RestaurantLanding() {
  let location = useLocation()
  const restaurant = location.state.restaurant
  return (
    <Container>
      {restaurant ? <h3>{restaurant.name}</h3> : <h3>Restaurant</h3>}

      {restaurant.dishes.map((dish, i) => {
        return (
          <Card key={i}>
            <Card.Body>
              <Card.Title>{dish.name}, ${dish.price}</Card.Title>
              <Card.Text>{dish.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}
