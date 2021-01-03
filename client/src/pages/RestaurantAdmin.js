import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import axios from "axios";

export default function RestaurantAdmin() {
  const { error, setError, history } = useContext(UserContext);
  const { restaurant, form, generalChangeRestaurant } = useContext(RestaurantContext);

  const formSubmit = async form => {
    return await axios.put(`http://localhost:5000/restaurants/${restaurant.id}`, form);
  };

  return (
    <Container>
      <h3>Add Details About {restaurant.name}</h3>
      <Form
        onSubmit={async e => {
          e.preventDefault();
          try {
            const response = await formSubmit({ ...form, restaurant });
            console.log(response);
            setError(null);
          } catch (error) {
            setError("Something went wrong, please try again");
          }
        }}
      >
        <Form.Label>Style of Food</Form.Label>
        <Form.Control
          value={form.style}
          onChange={generalChangeRestaurant}
          as="select"
          name="style"
        >
          <option>Burger's & Fries</option>
          <option>Pizza</option>
          <option>Indian</option>
          <option>Italian</option>
          <option>Japanese</option>
        </Form.Control>
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={form.description}
          onChange={generalChangeRestaurant}
          name="description"
          as="textarea"
        />

        {/* <Form.Label>Dishes</Form.Label>
        <Form.Control value={form.dishes} name="dishes" /> */}
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
