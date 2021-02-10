import React, { useContext, useState } from "react";
import { Row, Col, Card, Modal, Button, Toast } from "react-bootstrap";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import { UserContext } from "../contexts/UserProvider";
import axios from "axios";

export default function CartModal() {
  const { show, handleClose, error } = useContext(RestaurantContext);
  const {
    cart,
    cartTotal,
    removeFromCart,
    user,
    history,
    setOrderToast,
  } = useContext(UserContext);

  const submitOrder = async cart => {
    try {
      return await axios
        .post("http://localhost:5000/order/", { cart, user })
        .then(() => {
          handleClose();
        })
        .then(() => {
          history.push("/Success");
        }).then(() => {
          setOrderToast(true)
        })
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Card>
        <Card.Body>
          <Card.Title>
            <Modal.Header closeButton>Your Cart</Modal.Header>
          </Card.Title>
          <h4>{error ? error : ""}</h4>
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
