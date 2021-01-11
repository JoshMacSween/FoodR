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

export default function CartModal({ show, handleClose }) {
  const { error, cart } = useContext(RestaurantContext);
  return (
    <Modal show={show} onHide={handleClose}>
      <Card>
        <Card.Body>
          <Card.Title>
            <Modal.Header closeButton>Your Cart</Modal.Header>
          </Card.Title>
          <h4>{error ? error : ""}</h4>
          <Card.Text></Card.Text>

          <Button type="submit">Submit</Button>
          <Button onClick={handleClose}>Back</Button>
        </Card.Body>
      </Card>
    </Modal>
  );
}
