import React, { useState } from "react";

export const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setformData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    let responseData;
    await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };
  const signup = async () => {
    console.log("sign");
    let responseData;
    await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };
  return (
    <div className="w-full h-4/5 bg-pink-50 pt-20">
      <div className="w-580 h-600 bg-white m-auto px-16 py-10  ">
        <h1 className="my-5 font-semibold text-3xl">{state}</h1>
        <div className="flex flex-col gap-7 mt-7">
          {state === "Sign up" ? (
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              className="h-16 w-full pl-5 border-solid border-2 border-gray-100 outline-none text-gray-500"
            />
          ) : (
            <></>
          )}

          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="Email"
            placeholder="Email Address"
            className="h-16 w-full pl-5 border-solid border-2 border-gray-100 outline-none text-gray-500"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="h-16 w-full pl-5 border-solid border-2 border-gray-100 outline-none text-gray-500"
          />
        </div>
        <button
          className="w-full h-16 text-white bg-red-500 mt-7 border-none text-2xl font-medium cursor-pointer "
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign up" ? (
          <p className="mt-5 font-medium text-gray-500 ">
            Already have an account?
            <span
              className="text-red-500 font-semibold cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="mt-5 font-medium text-gray-500">
            Create an account?
            <span
              className="text-red-500 font-semibold cursor-pointer"
              onClick={() => setState("Sign up")}
            >
              Click here
            </span>
          </p>
        )}

        <div className="flex items-center mt-6 gap-5 text-gray-500 font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of the signup policy</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
