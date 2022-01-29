import React from "react";
import "./home.css";

const Home = () => {
  const titleText = [
    { type: "heading1", text: "I'm Khadar Arteh." },
    { type: "heading2", text: "Jr Developer." },
  ];
  return (
    <div className="home-Wrapper">
      <div className="container-fluid home-container">
        <img className="backgrund-img" src="/images/Hello-BG.png" alt="" />
        <div className="row">
          <div className="col h1-container">
            <h1 className="intro-h1">I'm Khadar Arteh.</h1>

            <p className="intro-paragraph">Jr Developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
