import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function UserProvider(props) {
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
        setToken(response.data.token);
        setUser(response.data.user)
      })
      .catch(err => {
        console.log(err);
      });
  }

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

  useEffect(() => {
    async function getToken() {
      const response = await axios.get("http://localhost:5000/users");
      setToken(response.data.token);
      console.log(token);
    }
    getToken();
  }, []);

  return (
    <UserContext.Provider
      value={{
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
