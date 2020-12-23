import React from "react";
import { Container, Row, Col, Card, Jumbotron, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="text-center">
      <div>
        <h2>Welcome to FoodR</h2>
        <p>The food delivery service for foodies</p>
      </div>
      <Row>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione
          reiciendis vitae, asperiores excepturi inventore.
        </Col>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam
          facere quia quis, animi amet.
        </Col>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit,
          at quo fugit quibusdam vel.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button>See All Restaurants</Button>
        </Col>
        <Col>
          <Button href="/RestaurantList">Go To Favourites</Button>
        </Col>
      </Row>
    </Container>
  );
}
