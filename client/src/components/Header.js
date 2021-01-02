import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  const { user, token, logout } = useContext(UserContext);
  return (
    <Navbar bg="light" expand="lg" className="d-flex justify-content-around">
      <Navbar.Brand href="/" className="p-2 flex-grow-1">
        Fooder
      </Navbar.Brand>


      {/* <LinkContainer to="/Register">
        <Nav.Link>Register</Nav.Link>
      </LinkContainer> */}
      <LinkContainer to="/VendorList">
        <Nav.Link>See All Available Restaurants</Nav.Link>
      </LinkContainer>

      {/* <LinkContainer to="/UserFavourites">
        <Nav.Link>Favourites</Nav.Link>
      </LinkContainer> */}
      {user && user.name ? (
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
