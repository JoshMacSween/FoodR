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
    favourites: [
      {
        name: "",
      },
    ],
  });

  const loginUser = async () => {
    axios
      .post("http://localhost:5000/users/login", {
        email: user.email,
        password: user.password,
      })
      .then(response => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        history.push("/");
      })

      .catch(err => {
        console.log(err);
      });
  };

  const logout = () => {
    setUser(null)
    history.push("/")
  }

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

  function handleChangeFavourites(e) {
    const value = e.target.value;

    setUser({ ...user, favourites: [{ name: value }] });
  }

  return (
    <UserContext.Provider
      value={{
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
