import React, { useContext } from "react";
import axios from "axios";
import { Container, Form, Card, Button, Col, Row } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";

export default function Register() {
  const {
    user,
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleChangeFavourites,
  } = useContext(UserContext);

  return (
    <Container>
      <h3 className="text-center">Register for FoodR</h3>
      <Form
        onSubmit={e => {
          e.preventDefault();
          axios.post("http://localhost:5000/users/", {
            name: user.name,
            email: user.email,
            password: user.password,
            favourites: user.favourites,
          });
        }}
      >
        <Form.Label>Name</Form.Label>
        <Form.Control value={user.name} onChange={handleChangeName} />

        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleChangeEmail}
          value={user.email}
          type="email"
        />

        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChangePassword}
          value={user.password}
          type="password"
        />

        {/* <Form.Label>Password Confirm</Form.Label>
        <Form.Control value={user.passwordConfirm} type="password" /> */}

        <Form.Label>Name a few of your favourite local restaurants</Form.Label>
        <Form.Control
          value={user.favourites.name}
          onChange={handleChangeFavourites}
          type="text"
          as="textarea"
        />
        <Button type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
