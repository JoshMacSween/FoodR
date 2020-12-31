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

  const formSubmit = async form => {
    return await axios.post("http://localhost:5000/restaurants/", form);
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        setRestaurant,
        formSubmit,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
}
