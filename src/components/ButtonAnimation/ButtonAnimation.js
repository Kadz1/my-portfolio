import React from "react";
import "./buttonAnimation.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const ButtonAnimation = (props) => {
  const listAnimation = {
    hover: { scale: 1.1 },
    tap: { scale: 0.8 },
  };

  return (
    <>
      <motion.button
        variants={listAnimation}
        whileHover="hover"
        whileTap="tap"
        type="button"
        class="btn btn-lg project-button"
      >
        {props.label}
        <MdOutlineKeyboardArrowRight className="skills-icon" />
      </motion.button>
    </>
  );
};

export default ButtonAnimation;
