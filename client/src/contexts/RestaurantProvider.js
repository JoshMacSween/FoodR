import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const RestaurantContext = createContext();

export default function RestaurantProvider(props) {
  const [restaurant, setRestaurant] = useState({
    name: "",
    password: "",
    address: "",
    dishes: [],
  });
  const [form, setForm] = useState({});
  const history = useHistory();
  const [restaurantToken, setRestaurantToken] = useState("");
  const [dishes, setDishes] = useState([{ name: "" }]);

  const [restId, setRestId] = useState(() => {
    const value = localStorage.getItem("restaurantId");

    return value !== null ? JSON.parse(value) : "Hi";
  });

  useEffect(() => {
    const data = localStorage.getItem("restaurantToken");
    if (data) {
      setRestaurantToken(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    async function fetchRestaurant() {
      const result = await axios
        .get(`http://localhost:5000/restaurants/${restId}`)
        .then(response => {
          setRestaurant(response.data.restaurant);
        });
    }
    fetchRestaurant();
  }, []);

  // useEffect(() => {
  //   const data = localStorage.getItem("restaurantData");
  //   if (data) {
  //     setRestaurant(JSON.parse(data));
  //   }
  // }, [restaurant]);

  // useEffect(() => {
  //   console.log("We realoded dishes")
  //   async function fetchDishes() {
  //     const result = await axios
  //     .get(`http://localhost:5000/restaurants/${restaurant.id}`)
  //       .then(response => {
  //         setDishes(response.data.restaurant.dishes)
  //       });
  //   }
  // }, []);


  const removeItem = async (dish) => {
    const dishId = dish._id;
    const result = await axios.delete(
      `http://localhost:5000/restaurants/delete/`,
      { data: { dishId, restId } }
    );
    history.go(0)
  };

  const formSubmit = async form => {
    return await axios.post("http://localhost:5000/restaurants/", form);
  };

  const generalChangeRestaurant = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginRestaurant = async () => {
    axios
      .post("http://localhost:5000/restaurants/login", form)
      .then(response => {
        localStorage.setItem(
          "restaurantToken",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "restaurantData",
          JSON.stringify(response.data.restaurant)
        );
        localStorage.setItem(
          "restaurantId",
          JSON.stringify(response.data.restaurant.id)
        );
        history.push("/RestaurantAdmin");
        history.go(0);
      });
  };

  return (
    <RestaurantContext.Provider
      value={{
        restId,
        removeItem,
        restaurant,
        setRestaurant,
        dishes,
        setDishes,
        form,
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
