import React from "react";
import { Container, Button, Card } from "react-bootstrap";

export default function OrderSuccess() {
  return (
    <Container style={{ textAlign: "center" }}>
      <Card>
        <Card.Body>
          <Card.Title>Success!</Card.Title>
          <Card.Text>
            Your order has been placed, thank you for your business
          </Card.Text>
          <div>
            <Button href="/">Back To Foodr</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
