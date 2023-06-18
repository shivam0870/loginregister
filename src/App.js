import "./App.css";
import { Homepage } from "./Components/Homepage/Homepage.js";
import { Login } from "./Components/Login/Login.js";
import { Register } from "./Components/Register/Register.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [loginUser, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              loginUser && loginUser._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />{" "}
          <Route
            path="/login"
            exact
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" exact element={<Register />} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
