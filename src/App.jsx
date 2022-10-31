import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //   fetch from randomuser.me
    const url = "https://randomuser.me/api/?results=20";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(true);
        console.log(data, users);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
