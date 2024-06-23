import React, { useState, useEffect } from "react";

import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";

import Header from "./shared/Header";
import Footer from "./shared/Footer"

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});
  
  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <About />
      <Home />
      <Login user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default App;
