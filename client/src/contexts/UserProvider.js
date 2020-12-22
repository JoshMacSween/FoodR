import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function UserProvider(props) {
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

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get("http://localhost:5000/users");
      console.log(response.data);
    }
    getUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        allUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
