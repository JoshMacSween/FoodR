import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import Favouite from "../components/Favourite";

export default function RestaurantList() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <h2>{user.name}'s Favourite Places To Eat</h2>
      {user && user.favourites ? (
        user.favourites.map(favourite => {
          return (
            <Row>
              <Col key={favourite._id}>
                <Favouite favourite={favourite} />
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
