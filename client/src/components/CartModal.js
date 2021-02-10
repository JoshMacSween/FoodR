import React, { useContext, useState, useEffect } from "react";
import { Row, Col, Card, Modal, Button, Toast } from "react-bootstrap";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import { UserContext } from "../contexts/UserProvider";
import axios from "axios";

export default function CartModal() {
  const { show, handleClose, restaurantError, setRestaurantError } = useContext(
    RestaurantContext
  );
  const {
    cart,
    cartTotal,
    removeFromCart,
    user,
    history,
    error,
    setError,
  } = useContext(UserContext);

  useEffect(() => {
    if (cart.length < 1) {
      setRestaurantError("Nothing in cart");
    } else {
      setRestaurantError(null);
    }
  }, [cart]);

  const submitOrder = async cart => {
    return await axios
      .post("http://localhost:5000/order/", { cart, user })
      .then(() => handleClose())
      .then(() => history.push("/success"));
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Card>
        <Card.Body>
          <Card.Title>
            <Modal.Header closeButton>Your Cart</Modal.Header>
          </Card.Title>
          {restaurantError && <h5>{restaurantError}</h5>}
          {cart.map((item, i) => {
            return (
              <Row key={i}>
                <Col>
                  <Card.Text>
                    {item.name}, ${item.price}
                  </Card.Text>
                </Col>

                <Col className="mb-2">
                  <Button
                    onClick={() => removeFromCart(item)}
                    style={{ marginLeft: "60%" }}
                  >
                    x
                  </Button>
                </Col>
              </Row>
            );
          })}

          <hr />

          <Card.Subtitle className="mb-2">Total: ${cartTotal}</Card.Subtitle>

          <Button
            disabled={restaurantError ? true : false}
            onClick={() => submitOrder(cart, user)}
            type="submit"
            className="mr-2"
          >
            Submit
          </Button>

          <Button onClick={handleClose}>Back</Button>
        </Card.Body>
      </Card>
    </Modal>
  );
}
