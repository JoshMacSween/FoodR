import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext();

export default function UserProvider(props) {
  const history = useHistory();
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    favourites: [],
  });

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

  const loginUser = async () => {
    axios
      .post("http://localhost:5000/users/login", {
        email: user.email,
        password: user.password,
      })
      .then(response => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        history.push("/UserFavourites");
        history.go(0);
      })

      .catch(err => {
        console.log(err);
      });
  };

  const logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    history.push("/Login");
    history.go(0);
  };

  const [allUsers, setAllUsers] = useState([]);

  function handleChangeName(e) {
    setUser({ ...user, name: e.target.value });
  }
  function handleChangeEmail(e) {
    setUser({ ...user, email: e.target.value });
  }
  function handleChangePassword(e) {
    setUser({ ...user, password: e.target.value });
  }

  const generalChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  function handleChangeFavourites(e) {
    const value = e.target.value;

    setUser({ ...user, favourites: [...user.favourites, { name: value }] });
  }

  const formSubmit = async form => {
    return await axios.post("http://localhost:5000/users/", form);
  };

  return (
    <UserContext.Provider
      value={{
        generalChange,
        formSubmit,
        logout,
        loginUser,
        token,
        setToken,
        handleChangeName,
        handleChangeEmail,
        handleChangePassword,
        handleChangeFavourites,
        user,
        setUser,
        allUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
