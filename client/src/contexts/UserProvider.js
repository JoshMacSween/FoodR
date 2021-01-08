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
      .post("http://localhost:5000/users/login", form)
      .then(response => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        history.push("/")
        history.go(0)
      })

      .catch(err => {
        console.log(err);
      });
  };

  const logout = () => {
    localStorage.clear()
    history.push("/");
    history.go(0);
  };

  const [allUsers, setAllUsers] = useState([]);

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
        allUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
