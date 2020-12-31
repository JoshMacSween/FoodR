import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function Partner() {
  const { formSubmit } = useContext(RestaurantContext);
  const [form, setForm] = useState({});
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  const generalChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <h2>Register Your Business</h2>
      <h2>{error}</h2>
      <Form
        onSubmit={async e => {
          e.preventDefault();
          try {
            const response = await formSubmit({ ...form });
            console.log(response);
            setError(null);
            history.push("/");
          } catch (error) {
            setError("Something went wrong, please try again");
          }
        }}
      >
        <Form.Label>Business Name</Form.Label>
        <Form.Control
          value={form.name}
          name="name"
          onChange={generalChange}
          type="text"
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={form.email}
          name="email"
          onChange={generalChange}
          type="email"
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={form.password}
          name="password"
          onChange={generalChange}
          type="password"
        />
        {/* <Form.Label>Name a few of your signature dishes</Form.Label>
        <Form.Control name="dishes" type="text" as="textarea" /> */}
        <Button type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
