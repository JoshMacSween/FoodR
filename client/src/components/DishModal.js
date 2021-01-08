import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button, Card, Form, Modal } from "react-bootstrap";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import { UserContext } from "../contexts/UserProvider";

export default function DishModal({handleClose, show}) {
  const { form, generalChangeRestaurant, formSubmit } = useContext(
    RestaurantContext
  );
  const { error, setError, history } = useContext(UserContext);

  const [dishes, setDishes] = useState([{ name: "" }]);

  return (
    <Modal show={show} onHide={handleClose}>
      <h3>{error ? error : "" }</h3>
      <Form onSubmit={async e => {
        e.preventDefault()
        try {
          const response = await formSubmit({...form, dishes})
          console.log(response)
        } catch (error) {
          setError("Something went wrong, please try again")
        }
      } }>
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
    </Modal>
  );
}
