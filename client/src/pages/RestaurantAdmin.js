import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  ListGroup,
} from "react-bootstrap";
import { UserContext } from "../contexts/UserProvider";
import { RestaurantContext } from "../contexts/RestaurantProvider";
import axios from "axios";
import DishModal from "../components/DishModal";
import { CloseOutlined } from "@ant-design/icons";

export default function RestaurantAdmin() {
  const { error, setError, history } = useContext(UserContext);
  const {
    restaurant,
    restId,
    dishes,
    setDishes,
    setRestaurant,
    form,
    generalChangeRestaurant,
    removeItem,
  } = useContext(RestaurantContext);

  const formSubmit = async form => {
    return await axios.post(
      `http://localhost:5000/restaurants/${restId}`,
      form
    );
  };

  // const [restId, setRestId] = useState(restaurantData.id);

  // useEffect(() => {
  //   console.log("We reloaded dishes");
  //   async function idSetter() {
  //     const data = localStorage.getItem("restaurantData");
  //     if (data) {
  //       const fetched = JSON.parse(data);
  //     }

  //   }
  //   idSetter();
  // }, []);

  // useEffect(() => {
  //   async function fetchRestaurant() {
  //     console.log(restId);
  //     const url = `http://localhost:5000/restaurants/${restId}`;
  //     console.log(url);
  //     const result = await axios
  //       .get(`http://localhost:5000/restaurants/${restId}`)
  //       .then(response => {
  //         console.log(response);
  //         // setDishes(response.data.restaurant.dishes);
  //         // console.log(response.data);
  //       });
  //   }
  //   fetchRestaurant();
  // }, []);

  useEffect(() => {
    restaurant.dishes.map(dish => {
      return setDishes(dish);
    });
  }, []);

  // const [dishId, setDishId] = useState([])
  //   restaurant.dishes.map((dish) => {
  //     const dishId = dish._id
  //     setDishId({dishId})
  //     return console.log(dishId)
  //   })

  // useEffect(() => {
  //   async function fetchDishes() {
  //     console.log(restId);
  //     const result = await axios
  //       .get(`http://localhost:5000/restaurants/${restId}`)
  //       .then(response => {
  //         console.log(response);
  //         setDishes(response.data.restaurant.dishes);
  //       });
  //   }
  //   fetchDishes();
  // }, []);

  const addDish = () => {
    setDishes([...dishes, { name: " " }]);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      {show && (
        <DishModal show={show} handleClose={handleClose} restId={restId} />
      )}
      <h3>Add Details About {restaurant.name}</h3>

      <Form
        className="mt-3"
        onSubmit={async e => {
          e.preventDefault();
          try {
            const response = await formSubmit({ ...form, restaurant, dishes });
            console.log(response);
            setError(null);
          } catch (error) {
            setError("Something went wrong, please try again");
          }
        }}
      >
        <Card>
          <Card.Body>
            {/* <Form.Group>
              <Card.Title>Style of Food</Card.Title>
              <Form.Control
                value={form.style}
                onChange={generalChangeRestaurant}
                as="select"
                name="style"
              >
                <option>Burger's & Fries</option>
                <option>Pizza</option>
                <option>Donair</option>
                <option>Indian</option>
                <option>Italian</option>
                <option>Japanese</option>
                <option>Mediterranian</option>
                <option>Thai</option>
                <option>Chinese</option>
              </Form.Control>
              <Card.Title className="mt-3">Description</Card.Title>
              <Form.Control
                value={form.description}
                onChange={generalChangeRestaurant}
                name="description"
                as="textarea"
              />
            </Form.Group> */}

            <Card.Title className="mt-3">Your Dishes</Card.Title>

            <ListGroup>
              {restaurant.dishes.map((dish, i) => {
                return (
                  <ListGroup.Item key={i}>
                    {dish.name} - ${dish.price}
                    <Button
                      onClick={() => removeItem(dish)}
                      className="sm"
                      style={{ float: "right", padding: "none" }}
                    >
                      x
                    </Button>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>

            <Card.Title className="mt-3">
              <Form.Label>Add more dishes</Form.Label>
            </Card.Title>

            {/* {dishes.map((dish, i) => {
              return (
                <Form.Control
                  key={i}
                  value={dish.name}
                  onChange={e => {
                    setDishes([
                      ...dishes.map((d, index) =>
                        index === i ? { name: e.target.value } : d
                      ),
                    ]);
                  }}
                  type="text"
                  name={`dishes-${i}`}
                />
              );
            })} */}
            <Button onClick={handleShow}>Add Dish</Button>
          </Card.Body>
        </Card>
      </Form>
    </Container>
  );
}
