import "./footer.css";
import React from "react";
import { MdMail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <div className="ontainer-fluid footer-container">
        <div className="row no-gutters footer-row">
          <div className="col-lg-8 no-gutters-col footer-col">
            <div className="footer-content">
              <div className="footer-title">
                <h1 className="footer-h2">KΛ.</h1>
              </div>
              <div className="footer-details">
                <div className="col-lg-5 col-md-6 col-sm-12  column">
                  <span className="footer-slogan">Let's Get Creative</span>
                  <br />
                  <span className="footer-text">
                    © 2021 All Rights Reserved
                  </span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                  <span className="footer-text">K.Arteh@hotmail.com</span>
                  <br />
                  <span className="footer-text">
                    © 2021 All Rights Reserved
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 no-gutters-col">
            <div className="footer-social">
              <span className="footer-social-title">Keep In Touch</span>
              <div className="social-media">
                <a className="social-icons" href="#">
                  <MdMail className="fa" />
                </a>
                <a className="social-icons">
                  <AiFillLinkedin />
                </a>
                <a className="social-icons">
                  <span>
                    <BsGithub />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
