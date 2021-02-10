import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RestaurantContext } from "../contexts/RestaurantProvider";

export default function RestaurantDetails() {
  const { restaurant } = useContext(RestaurantContext);

  return (
    <Container>
      <Row>
        {restaurant.dishes.map((dish, i) => {
          return <Col key={i}>{dish.name}</Col>;
        })}
      </Row>
    </Container>
  );
}
