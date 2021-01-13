import React, { useContext } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";

export default function Login() {
  const {
    generalChange,
    form,
    loginUser
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
          type="email"
          name="email"
          value={form.email}
          onChange={generalChange}
        />

        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={form.password}
          onChange={generalChange}
        />

        <Button type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
