import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
  return (
    <>
   <Navbar />
   <Home />
   <About />
 

    </>
  );
}

export default App;
