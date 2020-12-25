import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function Partner() {
  return (
    <Container>
      <h2>Register Your Business</h2>
      <Form>
        <Form.Label>Business Name</Form.Label>
        <Form.Control type="text" />

        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />

        <Form.Label>Name a few of your signature dishes</Form.Label>
        <Form.Control type="text" as="textarea" />
      </Form>
    </Container>
  );
}
