import React from "react";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
     <Navbar />
     <Header />
     <About />
     <Main />
    </div>
  );
};

export default App;
