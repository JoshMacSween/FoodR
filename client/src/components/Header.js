import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  const { user, token, logout } = useContext(UserContext);
  return (
    <Navbar bg="light" expand="lg" className="d-flex justify-content-around">
      <Navbar.Brand href="/" className="p-2 flex-grow-1">Fooder</Navbar.Brand>

      {/* {/* {token ? ( */}

      <LinkContainer to="/Login">
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/Register">
        <Nav.Link>Register</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/RestaurantList">
        <Nav.Link>Favourites</Nav.Link>
      </LinkContainer>
      <Nav.Item>
        <Button onClick={logout}>Logout</Button>
      </Nav.Item>
    </Navbar>
  );
}
