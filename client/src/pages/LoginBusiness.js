import React, { useContext, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import axios from "axios";

export default function LoginBusiness() {
  const { restaurant, setRestaurant, loginRestaurant, generalChangeRestaurant } = useContext(RestaurantContext);

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
          onChange={generalChangeRestaurant}
          value={restaurant.email}
          type="email"
          name="email"
        />

        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={generalChangeRestaurant}
          value={restaurant.password}
          type="password"
          name="password"
        />

        <Button type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
