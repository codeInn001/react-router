import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import ErrorBoundaryPage from "./components/ErrorBoundaryPage";
import Fallback from "./components/Fallback";
import { ErrorBoundary } from "react-error-boundary";

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
        
      });
  }, []);

  function handleErrorBoundaryError(error, info) {
    console.log("loading", error, info);
  }

  return (
    <div>
      <Navbar />
      <ErrorBoundary
        FallbackComponent={Fallback}
        onError={handleErrorBoundaryError}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users users={users} />} />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/error boundary"
            element={<ErrorBoundaryPage country="India" />}
          />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
