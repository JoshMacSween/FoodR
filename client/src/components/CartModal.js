import React, { useContext } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import { UserContext } from "../contexts/UserProvider";

export default function CartModal() {
  const { show, handleClose, error } = useContext(RestaurantContext);
  const { cartItems, cart, cartTotal, removeFromCart } = useContext(
    UserContext
  );

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
                    onClick={() => removeFromCart(item, i)}
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
          <Button type="submit" className="mr-2">
            Submit
          </Button>
          <Button onClick={handleClose}>Back</Button>
        </Card.Body>
      </Card>
    </Modal>
  );
}
