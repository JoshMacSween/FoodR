import React, { createContext, useState, useEffect } from "react";

export const RestaurantContext = createContext();
export default function RestaurantProvider(props) {
  const [restaurant, setRestaurant] = useState({
    name: "Bean Palace",
    email: "",
    dishes: [],
  });
  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
}
