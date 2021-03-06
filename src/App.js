import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <>
      <BurgerMenu />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
