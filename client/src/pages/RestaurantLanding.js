import React, { useContext } from "react";
import { Row, Col, Button, Card, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

export default function RestaurantLanding() {
  let location = useLocation();
  const restaurant = location.state.restaurant;
  const { addToCart } = useContext(UserContext);

  return (
    <Container>
      {restaurant ? <h3>{restaurant.name}</h3> : <h3>Restaurant</h3>}
      {restaurant.dishes.map((dish, i) => {
        return (
          <Card key={i} className="mb-3">
            <Card.Body>
              <Card.Title>
                {dish.name}, ${dish.price}
              </Card.Title>
              <Row>
                <Col>
                  <Card.Text>{dish.description}</Card.Text>
                </Col>
                <Col>
                  <Button onClick={() => addToCart(dish)} variant="link" style={{ marginLeft: "60%" }}>
                    Add To Order
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );
      })}
      <LinkContainer to="/VendorList">
        <Button block>Back</Button>
      </LinkContainer>
    </Container>
  );
}
