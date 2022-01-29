import "./burgerMenu.css";
import { React, useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import { useTransition, animated } from "react-spring";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const BurgerMenu = () => {
  // Show and Hide Navbar on Scroll

  const [showNav, setShowNav] = useState(window.scroll);

  const navControl = () => {
    if (showNav > window.scrollY) {
      document.getElementById("navbar").className = "nav";
    } else if (showNav < window.scrollY) {
      document.getElementById("navbar").className = "navHide";
    }
    setShowNav(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", navControl);
    return () => {
      window.removeEventListener("scroll", navControl);
    };
  }, [navControl]);

  //  Show menu when burgerMenu is clicked.

  const [showMenu, setShowMenu] = useState(false);

  const transitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showMenu,
    delay: 200,
  });

  // Framer motion hover effect on list items.

  const listAnimation = {
    hover: { scale: 1.2 },
    tap: { scale: 0.8 },
  };

  return (
    <nav id="navbar">
      <div className="container-fluid burgerMenu-container">
        <div className="navbarFixed">
          <span className="logo">KΛ.</span>
          <span className="hamBurgerMenu ">
            <Hamburger toggled={showMenu} toggle={setShowMenu} />
          </span>
        </div>

        {transitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="menu"
                inView={
                  showMenu
                    ? (document.body.style.overflow = "hidden")
                    : (document.body.style.overflow = "visible")
                }
              >
                <div className="menu-items">
                  <div className="row">
                    <div className="col-lg-9 contact-form-container">
                      <ContactForm />
                    </div>
                    <div className="col-lg-3 menu-ul-container">
                      <ul
                        className="menu-ul"
                        onClick={() => setShowMenu(false)}
                      >
                        <motion.li
                          variants={listAnimation}
                          whileHover="hover"
                          whileTap="tap"
                          className="menu-li"
                        >
                          <a className="menu-link" href="#home">
                            Home
                          </a>
                        </motion.li>
                        <motion.li
                          variants={listAnimation}
                          whileHover="hover"
                          whileTap="tap"
                          className="menu-li"
                        >
                          <a className="menu-link" href="#about">
                            About
                          </a>
                        </motion.li>
                        <motion.li
                          variants={listAnimation}
                          whileHover="hover"
                          whileTap="tap"
                          className="menu-li"
                        >
                          <a className="menu-link" href="#projects">
                            Projects
                          </a>
                        </motion.li>
                        <motion.li
                          variants={listAnimation}
                          whileHover="hover"
                          whileTap="tap"
                          className="menu-li"
                        >
                          <a className="menu-link" href="">
                            Blog
                          </a>
                        </motion.li>
                        <motion.li
                          variants={listAnimation}
                          whileHover="hover"
                          whileTap="tap"
                          className="menu-li"
                        >
                          <a className="menu-link" href="#contacts">
                            Contact
                          </a>
                        </motion.li>
                      </ul>
                    </div>
                  </div>
                </div>
              </animated.div>
            )
        )}
      </div>
    </nav>
  );
};

export default BurgerMenu;
