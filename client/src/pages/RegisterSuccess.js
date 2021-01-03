import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function RegisterSuccess() {
  return (
    <Container>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            <h3>Hooray!</h3>
          </Card.Title>
          <Card.Subtitle>You're with us now.</Card.Subtitle>
          <Card.Text >
            Log in and find a new favourite restaurant
          </Card.Text>
          <Row className="text-center">
            <Col>
              <LinkContainer to="/Login">
                <Button>
                  <Row>
                    <Col>Log In User</Col>
                  </Row>
                </Button>
              </LinkContainer>
            </Col>
            <Col>
              <LinkContainer to="/LoginBusiness">
                <Button>
                  <Row>
                    <Col>Log In Business</Col>
                  </Row>
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
