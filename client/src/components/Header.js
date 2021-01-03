import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import { LinkContainer } from "react-router-bootstrap";
import RestaurantNav from "./RestaurantNav";
import UserNav from "./UserNav";

export default function Header() {
  const { user, token, logout } = useContext(UserContext);
  const { restaurantToken } = useContext(RestaurantContext);
  return (
    <Navbar bg="light" expand="lg" className="d-flex justify-content-around">
      <Navbar.Brand href="/" className="p-2 flex-grow-1">
        Fooder
      </Navbar.Brand>

      {restaurantToken && <RestaurantNav />}
      {token && <UserNav />}

      {/* <LinkContainer to="/Register">
        <Nav.Link>Register</Nav.Link>
      </LinkContainer> */}
      <LinkContainer to="/VendorList">
        <Nav.Link>Restaurants</Nav.Link>
      </LinkContainer>

      {restaurantToken || token ? (
        <Nav.Item>
          <Button onClick={logout}>Logout</Button>
        </Nav.Item>
      ) : (
        <LinkContainer to="/Login">
          <Button>Login</Button>
        </LinkContainer>
      )}
    </Navbar>
  );
}
