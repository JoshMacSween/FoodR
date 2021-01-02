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
        <Form.Label>Address</Form.Label>
        <Form.Control
          name="address"
          onChange={generalChange}
          value={form.address}
          type="text"
        />
        {/* <Form.Label>Description</Form.Label>
        <Form.Control value={form.description}/> */}
        {/* <Form.Label>Dishes</Form.Label>
        <Form.Control value={form.dishes}/> */}
      </Form>
    </Container>
  );
}
