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
            <h3 className="intro-h3">I'm Khadar Arteh.</h3>
            <h2 className="intro-h2">Junior Full</h2>

            <h1 className="intro-h1">Stack Developer.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
