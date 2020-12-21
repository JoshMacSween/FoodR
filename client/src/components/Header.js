import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Fooder</Navbar.Brand>
      <Nav.Link href="/Register">Register</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>
    </Navbar>
  );
}
