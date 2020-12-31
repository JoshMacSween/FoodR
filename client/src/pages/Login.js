import React, { useContext, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import axios from "axios";

export default function Login() {
  const {
    generalChange,
    loginUser,
    token,
    setToken,
    user,
    setUser,
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleChangeFavourites,
  } = useContext(UserContext);

  return (
    <Container>
      <h3 className="text-center">Log In</h3>
      <Form
        onSubmit={e => {
          e.preventDefault();
          loginUser();
        }}
      >
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

        <Button type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
