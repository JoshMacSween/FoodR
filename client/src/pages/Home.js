import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
          <Card>
            <Card.Body>
              <Card.Title>User Sign Up</Card.Title>

              <LinkContainer to="/Register">
                <Button block>Sign Up</Button>
              </LinkContainer>
              <LinkContainer to="/Login">
                <Button block>Log In</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Business Sign Up</Card.Title>

              <LinkContainer to="/Partner">
                <Button block>Register Your Business</Button>
              </LinkContainer>
              <LinkContainer to="/LoginBusiness">
                <Button block>Business Log In</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
