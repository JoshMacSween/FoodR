import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function RestaurantNav() {
  return (
    <div>
      <LinkContainer to="/RestaurantAdmin">
        <Nav.Link>Profile</Nav.Link>
      </LinkContainer>
    </div>
  );
}
