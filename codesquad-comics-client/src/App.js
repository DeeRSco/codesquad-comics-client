import React from "react";
import About from "./components/About";
import Header from "./shared/Header";
import Footer from "./shared/Footer"

import Home from "./components/Home"

import {useState} from "react";


function App() {
  const [user, setUser] = useState({});
  
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
