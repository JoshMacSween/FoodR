import React, { useEffect, useContext, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

export default function VendorList() {
  const [restaurantList, setRestaurantList] = useState([]);

  async function fetchRestaurants() {
    const response = await axios.get("http://localhost:5000/restaurants/");
    let restaurants = await response.data.restaurants;

    restaurants.map(restaurant => {
      return setRestaurantList([...restaurants], restaurant);
    });
    // console.log(restaurantList);
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <Container>
      <h3>Listing All Available Restaurants</h3>

      {restaurantList.map((restaurant, i) => {
        return (
          <Row key={i}>
            <Col className="text-center mb-2">
              <Card>
                <Card.Body>
                  <Card.Title>{restaurant.name}</Card.Title>
                  <Card.Subtitle>{restaurant.style}</Card.Subtitle>
                  <Card.Text>
                    {restaurant.description ? (
                      restaurant.description
                    ) : (
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nesciunt reiciendis nulla esse necessitatibus,
                        deleniti illum.
                      </p>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}
