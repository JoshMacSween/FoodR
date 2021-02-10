import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext();

export default function UserProvider(props) {
  const history = useHistory();
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    favourites: [],
  });
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [orderToast, setOrderToast] = useState(false);

  useEffect(() => {
    total();
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data) {
      setToken(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const total = () => {
    let value = 0;
    for (let i = 0; i < cart.length; i++) {
      value += cart[i].price;
    }
    setCartTotal(value);
  };

  const addToCart = dish => {
    setCart([...cart, dish]);
    // toggleShowAddToast();
  };

  const removeFromCart = item => {
    let cartArray = [...cart];
    cartArray = cartArray.filter(cartItem => cartItem._id !== item._id);
    setCart(cartArray);
  };

  const loginUser = async () => {
    axios
      .post("http://localhost:5000/users/login", form)
      .then(response => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        history.push("/VendorList");
        // Solve With UseEffect
        history.go(0);
      })

      .catch(err => {
        console.log(err);
      });
  };

  const logout = () => {
    localStorage.clear();
    history.push("/");
    history.go(0);
  };

  const generalChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formSubmit = async form => {
    return await axios.post("http://localhost:5000/users/", form);
  };
  // function handleChangeFavourites(e) {
  //   const value = e.target.value;

  //   setUser({ ...user, favourites: [...user.favourites, { name: value }] });
  // }

  return (
    <UserContext.Provider
      value={{
        removeFromCart,
        cartTotal,
        addToCart,
        cart,
        setCart,
        history,
        form,
        setForm,
        error,
        setError,
        generalChange,
        formSubmit,
        logout,
        loginUser,
        token,
        setToken,
        user,
        setUser,
        orderToast,
        setOrderToast,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

// const [showOrderToast, setShowOrderToast] = useState(false);
//   <Col xs={6}>
//         <Toast show={showOrderToast} onClose={setShowOrderToast(false)}>
//           <Toast.Header>
//             Weeooo
//           </Toast.Header>
//           <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
//         </Toast>
//       </Col>
