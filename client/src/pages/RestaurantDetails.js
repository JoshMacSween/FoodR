import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, ListItem } from "react-bootstrap";
import { RestaurantContext } from "../contexts/RestaurantProvider";

export default function RestaurantDetails() {
  const { restaurant } = useContext(RestaurantContext);

  return (
    <Container>
      <Row>
        {restaurant.dishes.map((d, i) => {
          return <Col key={i}>{d.name}</Col>;
        })}
      </Row>
    </Container>
  );
}
