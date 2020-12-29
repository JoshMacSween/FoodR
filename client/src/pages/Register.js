import React, { useState, useContext } from "react";
import axios from "axios";
import { Container, Form, Card, Button, Col, Row } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import { useHistory } from "react-router";

export default function Register() {
  const {
    formSubmit,
    user,
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleChangeFavourites,
  } = useContext(UserContext);
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const history = useHistory();

  const generalChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <h3 className="text-center">Register for Fooder</h3>
      <Form
        onSubmit={async e => {
          e.preventDefault();
          try {
            const response = await formSubmit(form);
            console.log(response);
            setError(null);
            history.push("/");
          } catch (error) {
            setError("Something went wrong, please try again");
          }
          // if (response.status < 400) {
          //   setError(null);
          //   history.push("/");
          // } else {
          //   setError({ message: response.message });
          // }
        }}
      >
        <h3>{error}</h3>
        <Form.Label>Name</Form.Label>
        <Form.Control value={form.name} onChange={generalChange} name="name" />

        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={generalChange}
          value={form.email}
          type="email"
          name="email"
        />

        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={generalChange}
          value={form.password}
          type="password"
          name="password"
        />

        {/* <Form.Label>Password Confirm</Form.Label>
        <Form.Control value={form.passwordConfirm} type="password" /> */}

        {/* <Form.Label>Name a few of your favourite local restaurants</Form.Label>
        <Form.Control
          value={form.favourites.name}
          onChange={generalChange}
          type="text"
          as="textarea"
          name="favourites"
        /> */}
        <Button type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
