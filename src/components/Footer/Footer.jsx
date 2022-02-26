import "./footer.css";
import React from "react";
import { MdMail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
  const listAnimation = {
    hover: { scale: 1.1 },
    tap: { scale: 0.8 },
  };
  return (
    <footer>
      <div className="container-fluid footer-container">
        <div className="row no-gutters footer-row">
          <div className="col-lg-8 no-gutters-col footer-col">
            <div className="footer-content">
              <div className="footer-title">
                <h1 className="footer-h2">KΛ.</h1>
              </div>
              <div className="footer-details">
                <div className="col-lg-5 col-md-6 col-sm-12  column">
                  <ul>
                    <li>
                      <span className="footer-slogan">
                        Good design is a language
                      </span>
                    </li>
                    <li>
                      <span className="footer-text">
                        © 2021 All Rights Reserved
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                  <ul>
                    <li>
                      <span className="footer-text">K.Arteh@hotmail.com</span>
                    </li>
                    <li>
                      <span className="footer-text">
                        © 2021 All Rights Reserved
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 no-gutters-col">
            <div className="footer-social">
              <span className="footer-social-title">Keep In Touch</span>
              <div className="social-media">
                <ul>
                  <motion.li
                    variants={listAnimation}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <a href="#">
                      <MdMail className="fa" />
                    </a>
                  </motion.li>
                  <motion.li
                    variants={listAnimation}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <a href="#">
                      <AiFillLinkedin />
                    </a>
                  </motion.li>
                  <motion.li
                    variants={listAnimation}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <a href="#">
                      <BsGithub />
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
