import React, { useContext, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import axios from "axios";

export default function LoginBusiness() {
  const { restaurant, form, setRestaurant, loginRestaurant, generalChangeRestaurant } = useContext(RestaurantContext);

  return (
    <Container>
      <h3 className="text-center">Log In</h3>
      <Form
        onSubmit={e => {
          e.preventDefault();
          loginRestaurant();
        }}
      >
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.email}
          onChange={generalChangeRestaurant}
        />

        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={form.password}
          onChange={generalChangeRestaurant}
        />

        <Button type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
