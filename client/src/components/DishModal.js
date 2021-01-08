import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Modal,
} from "react-bootstrap";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import { UserContext } from "../contexts/UserProvider";
import axios from 'axios'

export default function DishModal({ handleClose, show }) {
  const { form, generalChangeRestaurant, restaurant } = useContext(
    RestaurantContext
  );
  const { error, setError, history } = useContext(UserContext);

  const [dishes, setDishes] = useState([{ name: "" }]);

  const formSubmit = async form => {
    return await axios.post(
      `http://localhost:5000/restaurants/${restaurant.id}`,
      form
    );
  };

  const email = restaurant.email
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Card>
        <Card.Body>
          <Card.Title>
            <Modal.Header closeButton>Adding Dish</Modal.Header>
          </Card.Title>
          <h4>{error ? error : ""}</h4>
          <Form
            onSubmit={async e => {
              e.preventDefault();
              try {
                const response = await formSubmit({ ...form, email });
                console.log(response);
              } catch (error) {
                setError("Something went wrong, please try again");
              }
            }}
          >
            <input type="hidden" value={restaurant.email} />
            <Row>
              <Col>
                <Form.Label>Dish Name</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={generalChangeRestaurant}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Price</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={generalChangeRestaurant}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={generalChangeRestaurant}
                />
              </Col>
            </Row>

            <Button type="submit">Submit</Button>
            <Button onClick={handleClose}>Back</Button>
          </Form>
        </Card.Body>
      </Card>

    </Modal>
  );
}
