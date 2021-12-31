import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
   <Navbar />
   <Home />
    </>
  );
}

export default App;
