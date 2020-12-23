import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";

export default function RestaurantList() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      {user && user.favourites ? (
        user.favourites.map(favourite => {
          return (
            <Row>
              <Col key={favourite._id}>
                <h1>{favourite.name}</h1>
              </Col>
            </Row>
          );
        })
      ) : (
        <h1>No Favourites For This User Yet</h1>
      )}
    </Container>
  );
}
