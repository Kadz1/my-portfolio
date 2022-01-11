import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-Wrapper">
      <div className="container">
        <div className="row about-row">
          <div className="col-md-12">
            <h1 className="about-H1">
              About Me<span className="full-stop">.</span>
            </h1>
            <p className="about-info-text">
              I am a self-taught passionate FrontEnd developer, currently
              working at Razorpay as a FrontEnd engineer. I want to build
              accessible, inclusive products and digital experiences at an
              innovative and exciting company. I also posses magical powers of
              using react to build delightful user interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
