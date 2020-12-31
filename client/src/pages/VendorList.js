import React, { useEffect, useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

export default function VendorList() {
  const [restaurantList, setRestaurantList] = useState([]);

  async function fetchRestaurants() {
    const response = await axios.get("http://localhost:5000/restaurants/");
    let restaurants = await response.data.restaurants;

    restaurants.map(restaurant => {
      return setRestaurantList([...restaurants], restaurant);
    });
    console.log(restaurantList);
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);
  return (
    <Container>
      <h3>Listing All Available Restaurants</h3>
      {restaurantList.map((restaurant, i) => {
        return <h3 key={i}>{restaurant.name}</h3>;
      })}
    </Container>
  );
}
