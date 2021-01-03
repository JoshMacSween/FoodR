import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import { LinkContainer } from "react-router-bootstrap";


export default function RestaurantNav() {
  return (
    <div>
      <LinkContainer to="/RestaurantAdmin">
        <Nav.Link>Profile</Nav.Link>
      </LinkContainer>
    </div>
  )
}
