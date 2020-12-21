import React from "react";
import { NavBar, Nav } from "react-bootstrap";

export default function SideNav() {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link href="/">Active</Nav.Link>
      <Nav.Link href="/Register">Register</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
    </Nav>
  );
}
