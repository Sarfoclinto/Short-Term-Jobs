import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UsersContextProvider(props) {
  const [allExistingUsers, setAllExistingUsers] = useState(null);

  const [logins, setLogins] = useState({
    email: "",
    password: "",
  });

  const [signup, setSignup] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    gender: "",
    password: "",
    tel: "",
  });
  const [currentUser, setCurrentUser] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    password: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginChange = (event) => {
    const { name, value } = event.target;
    setLogins((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    fetch("http://localhost:8000/allUsers")
      .then((res) => {
        if (!res) {
          throw Error("Response not found");
        }
        return res.json();
      })
      .then((data) => setAllExistingUsers(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <UserContext.Provider
      value={{
        logins,
        setLogins,
        loginChange,
        allExistingUsers,
        setAllExistingUsers,
        setCurrentUser,
        isAuthenticated,
        setIsAuthenticated,
        signup,
        setSignup,
        currentUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UsersContextProvider;
