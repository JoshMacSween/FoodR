import React, { useState, useContext } from "react";

import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import { useHistory } from "react-router";

export default function Register() {
  const { formSubmit } = useContext(UserContext);
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const history = useHistory();
  const [favourites, setFavourites] = useState([{ name: "" }]);

  const generalChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const addFavourite = () => {
    setFavourites([...favourites, { name: "" }]);
  };

  return (
    <Container>
      <h3 className="text-center">Register for Fooder</h3>
      <Form
        onSubmit={async e => {
          e.preventDefault();
          try {
            const response = await formSubmit({ ...form, favourites });
            console.log(response);
            setError(null);
            history.push("/RestaurantList");
          } catch (error) {
            setError("Something went wrong, please try again");
          }
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

        <Form.Label>Name a few of your favourite local restaurants</Form.Label>

        {favourites.map((favourite, i) => {
          return (
            <Form.Control
              key={i}
              value={favourite.name}
              onChange={e =>
                setFavourites([
                  ...favourites.map((f, index) =>
                    index === i ? { name: e.target.value } : f
                  ),
                ])
              }
              type="text"
              name={`favourites-${i}`}
              required
            />
          );
        })}

        <Button onClick={addFavourite} block>Add Another</Button>

        <Button type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
