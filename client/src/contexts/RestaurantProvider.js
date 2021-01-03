import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RestaurantContext = createContext();

export default function RestaurantProvider(props) {
  const [restaurant, setRestaurant] = useState({
    name: "",
    password: "",
    address: "",
    dishes: [],
  });

  const [restaurantToken, setRestaurantToken] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("restaurantData");
    if (data) {
      setRestaurant(JSON.parse(data));
    }
    console.log(restaurant);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("restaurantToken");
    if (data) {
      setRestaurantToken(JSON.parse(data));
    }
  });

  const formSubmit = async form => {
    return await axios.post("http://localhost:5000/restaurants/", form);
  };

  const generalChangeRestaurant = e => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const loginRestaurant = async () => {
    axios
      .post("http://localhost:5000/restaurants/login", {
        email: restaurant.email,
        password: restaurant.password,
      })
      .then(response => {
        localStorage.setItem(
          "restaurantToken",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "restaurantData",
          JSON.stringify(response.data.restaurant)
        );
      });
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        restaurantToken,
        formSubmit,
        generalChangeRestaurant,
        loginRestaurant,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
}
