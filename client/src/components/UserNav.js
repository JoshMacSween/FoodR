import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import { LinkContainer } from "react-router-bootstrap";
import CartModal from "./CartModal";

export default function RestaurantNav() {
  const { show, setShow } = useContext(RestaurantContext);

  return (
    <>
      <LinkContainer to="/UserFavourites">
        <Nav.Link>Favourites</Nav.Link>
      </LinkContainer>

      <Nav.Item onClick={() => setShow(true)}>Cart</Nav.Item>

      {show && <CartModal />}

    </>
  );
}
