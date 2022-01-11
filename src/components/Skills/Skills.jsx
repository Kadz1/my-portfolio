import React from "react";
import "./skills.css";
import {
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";
const Skills = () => {
  return (
    <div className="skills-Wrapper">
      <div className="container skills-container">
        <div className="container skills-h1">
          <h1 className="skills-Header">My Skills</h1>
        </div>
        <div className="parallax-outer">
          <div className="parallax-inner">
            <p className="javascript">
              <SiJavascript />
            </p>
            <p className="react">
              <FaReact />
            </p>
            <p className="html">
              <FaHtml5 />
            </p>
            <p className="css">
              <FaCss3Alt />
            </p>
            <p className="mongo">
              <SiMongodb />
            </p>
            <p className="bootstrap">
              <FaBootstrap />
            </p>
            <p className="node">
              <FaNodeJs />
            </p>
            <p className="z">ES6</p>
            <p className="x">HTML</p>
            <p className="github">
              <FaGithub />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
