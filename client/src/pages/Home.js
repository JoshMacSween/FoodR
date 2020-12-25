import React from "react";
import { Container, Row, Col, Card, Jumbotron, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function Home() {
  return (
    <Container className="text-center">
      <div>
        <h2>Welcome to Fooder</h2>
        <p>The food delivery service for foodies</p>
      </div>
      <Row>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit
          nisi excepturi, autem nihil aut quibusdam iure sequi veniam illo et
          aliquam temporibus blanditiis similique!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quasi ratione reiciendis vitae,
          asperiores excepturi inventore.
        </Col>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit
          nisi excepturi, autem nihil aut quibusdam iure sequi veniam illo et
          aliquam temporibus blanditiis similique!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error quam facere quia quis, animi amet.
        </Col>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit
          nisi excepturi, autem nihil aut quibusdam iure sequi veniam illo et
          aliquam temporibus blanditiis similique!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tenetur sit, at quo fugit quibusdam vel.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <LinkContainer to="/Partner">
            <Button block>Register Your Business</Button>
          </LinkContainer>
        </Col>
        <Col>
          <LinkContainer to="/RestaurantList">
            <Button block>Go To Favourites</Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
}
