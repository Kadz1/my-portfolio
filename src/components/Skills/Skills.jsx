import { React, useEffect, Fragment } from "react";
import "./skills.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 0,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 40,
        },
        // rotate: [0, 360],
        scale: 1,
      });
    }
    if (!inView) {
      animation.start({
        scale: 0,
      });
    }
  }, [inView]);

  const TagCloud = require("TagCloud");

  var myTags = [
    "React.js",
    "Javascript",
    "Bootstrap",
    "MongoDB",
    "Nodejs",
    "ES6",
    "Json",
    "APIs",
    "CSS",
    "HTML",
    "GitHub",
    "Express",
    "MySQL",
    "JSX",
  ];

  var tagCloud = TagCloud(".content", myTags, {
    // radius in px
    radius: 300,

    // animation speed
    // slow, normal, fast
    maxSpeed: "normal",
    initSpeed: "normal",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
  });

  return (
    <div ref={ref} className="skills-Wrapper">
      <div className="skills-container">
        <div className="container ">
          <div className="skills-title-container">
            <span className="skills-slogan">Knowledge Is Everything.</span>
            <h1 className="skills-Header">
              My <br /> Skills<span className="full-stop2">.</span>
            </h1>
            <p>
              <span>It's not over yet!</span>I'm committed to lifelong learning
              and the development of further skills.
            </p>
          </div>
        </div>
        <div className="animation-container">
          <motion.div className="content" animate={animation}></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
