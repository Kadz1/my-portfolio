import React from "react";
import "./about.css";
import ButtonAnimation from "../ButtonAnimation/ButtonAnimation.js";

const About = () => {
  return (
    <div className="about-Wrapper" id="about">
      <img
        className="skills-img"
        src="/images/skillsBackgroundImg.jpeg"
        alt=""
      />
      <div className="container about-container">
        <div className="row about-row">
          <div className="col-md-12">
            <h1 className="about-H1">
              About Me<span className="full-stop">.</span>
            </h1>
            <p className="about-info-text">
              I am a self-taught passionate full stack developer, attracted by
              the unique combination of creativity, logic, technology and never
              running out of new things to discover. I want to build accessible,
              inclusive products and digital experiences at an innovative and
              exciting company.
            </p>
            <ButtonAnimation label="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
