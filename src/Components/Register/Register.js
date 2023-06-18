import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = async () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      await axios
        .post("http://localhost:9002/register", user)
        .then((res) => alert(res.data.message));

      navigate("/login");
      // alert("Confirm")
    } else {
      alert("Invalid Data");
    }
  };

  return (
    <>
      <div className="registerContainer">
        <h1> Register </h1>{" "}
        <div className="registerForm">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />{" "}
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />{" "}
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />{" "}
          <input
            type="password"
            placeholder="Enter your reEnterPassword"
            name="reEnterPassword"
            value={user.reEnterPassword}
            onChange={handleChange}
          />{" "}
        </div>{" "}
        <div>
          <Button variant="primary" onClick={register}>
            Regsiter{" "}
          </Button>{" "}
          <Button variant="primary" onClick={() => navigate("/login")}>
            {" "}
            Login{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
