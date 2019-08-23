import React, { useState } from "react";
import axios from "axios";

const Login = ({ history }) => {
  const [auth, setAuth] = useState({ username: "", password: "" });

  const handleChange = e => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", auth)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        history.push("/bubblePage");
      })
      .catch(err => console.log(err.response));
    setAuth({ username: "", password: "" });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className="login">
      <h1>Welcome to Bubble Page</h1>
      <h3>User Login </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={auth.username}
          placeholder={"username"}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={auth.password}
          placeholder={"password"}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
