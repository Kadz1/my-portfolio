import { React, useEffect } from "react";
import "./skills.css";
import {
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiMongodb, SiJavascript, SiMysql } from "react-icons/si";
import Parallax from "react-rellax";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);

    if (inView) {
      animation.start({
        // x: 0,
        // transition: { type: "spring", duration: 1, bounce: 0.3 },
        scale: 0,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 40,
        },
        rotate: [0, 360],
        scale: 1,
      });
    }
    if (!inView) {
      animation.start({
        scale: 0,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="skills-Wrapper">
      <div className="container skills-container">
        <h1 className="skills-Header">Skills</h1>
      </div>
      <div>
        <div className="animation-container">
          <motion.span
            animate={animation}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="react"
          >
            <FaReact />
          </motion.span>
          <motion.span animate={animation} className="javascript ">
            <SiJavascript />
          </motion.span>
          <motion.span animate={animation} className="github">
            <FaGithub />
          </motion.span>
          <motion.span animate={animation} className="bootstrap">
            <FaBootstrap />
          </motion.span>
          <motion.span animate={animation} className="html">
            <FaHtml5 />
          </motion.span>
          <motion.span animate={animation} className="css">
            <FaCss3Alt />
          </motion.span>
          <motion.span animate={animation} className="mongo">
            <SiMongodb />
          </motion.span>
          <motion.span animate={animation} className="node">
            <FaNodeJs />
          </motion.span>
          <motion.span animate={animation} className="mysql">
            <SiMysql />
          </motion.span>
          <motion.span animate={animation} className="ES6">
            ES6
          </motion.span>
          <motion.span animate={animation} className="api">
            API
          </motion.span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Skills;
