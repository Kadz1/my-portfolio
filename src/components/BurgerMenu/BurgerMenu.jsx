import "./burgerMenu.css";
import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { Squash as Hamburger } from "hamburger-react";

const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const transitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showMenu,
    delay: 200,
  });

  return (
    <nav>
      <div className="container-fluid burgerMenu-container">
        <span className="logo">KΛ.</span>
        <span className="hamBurgerMenu">
          {" "}
          <Hamburger toggled={showMenu} toggle={setShowMenu} />
        </span>
        {transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles} className="menu ">
                <div className="menu-items ">
                  <ul className="menu-ul" onClick={() => setShowMenu(false)}>
                    <li className="menu-li">
                      <a className="menu-link" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="menu-li">
                      <a className="menu-link" href="#about">
                        About
                      </a>
                    </li>
                    <li className="menu-li">
                      <a className="menu-link" href="#projects">
                        Projects
                      </a>
                    </li>
                    <li className="menu-li">
                      <a className="menu-link" href="#contacts">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </animated.div>
            )
        )}
      </div>
    </nav>
  );
};

export default BurgerMenu;
