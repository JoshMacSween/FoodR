import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import Favouite from "../components/Favourite";

export default function UserFavourites() {
  const { user, cartItems } = useContext(UserContext);

  return (
    <Container>
      {user ? <h2>{user.name}'s Favourite Places To Eat</h2> : null}
      {cartItems}
      {/* {user && user.favourites ? (
        user.favourites.map(favourite => {
          return (
            <Row className="mb-3">
              <Col key={favourite._id}>
                <Favouite favourite={favourite} />
              </Col>
            </Row>
          );
        })
      ) : (
        <h1>No Favourites For This User Yet</h1>
      )} */}
    </Container>
  );
}
