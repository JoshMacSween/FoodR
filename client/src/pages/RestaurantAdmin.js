import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import axios from "axios";

export default function RestaurantAdmin() {
  const { form, setForm, error, setError, generalChange, history } = useContext(
    UserContext
  );
  const { restaurant } = useContext(RestaurantContext);
  const formSubmit = async form => {
    return await axios.post("http://localhost:5000/restaurants/", form);
  };

  return (
    <Container>
      <h3>Add Details About Your Business</h3>
      <Form
      // onSubmit={async e => {
      //     e.preventDefault();
      //     try {
      //       const response = await formSubmit({ ...form, favourites });
      //       console.log(response);
      //       setError(null);
      //       history.push("/UserFavourites");
      //     } catch (error) {
      //       setError("Something went wrong, please try again");
      //     }
      //   }}
      >
        <Form.Label>Style of Food</Form.Label>
        <Form.Control value={form.style} as="select" name="style">
          <option>Burger's & Fries</option>
          <option>Pizza</option>
          <option>Indian</option>
          <option>Italian</option>
          <option>Japanese</option>
        </Form.Control>
        <Form.Label>Description</Form.Label>
        <Form.Control value={form.description} name="description" />

        <Form.Label>Dishes</Form.Label>
        <Form.Control value={form.dishes} name="dishes" />
      </Form>
    </Container>
  );
}
