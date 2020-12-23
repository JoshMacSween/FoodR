import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  const { user, token, logout } = useContext(UserContext);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Fooder</Navbar.Brand>

      {/* {/* {token ? ( */}
      <Nav.Item>
        <Button onClick={logout}>Logout</Button>
      </Nav.Item>

      <Nav.Link href="/Login">Login</Nav.Link>

      <Nav.Link href="/Register">Register</Nav.Link>

      <Nav.Link href="/About">About</Nav.Link>
      <LinkContainer to="/RestaurantList">
        <Nav.Link>Favourites</Nav.Link>
      </LinkContainer>
    </Navbar>
  );
}
