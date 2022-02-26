import React from "react";
import "./contactForm.css";
import { GoPerson } from "react-icons/go";
import { RiMailSendLine } from "react-icons/ri";
import { motion } from "framer-motion";

const ContactForm = () => {
  const listAnimation = {
    hover: { scale: 1.2 },
    tap: { scale: 0.8 },
  };
  return (
    <div className=" contact-wrapper">
      <div className="container ">
        <div class="row contact-row">
          <div className="col-12 contact-col">
            <img className="contact-img" src="/images/theme-img.png" alt="" />

            <div className="contact-container">
              <h1 className="form-title">
                Contact Me<span className="full-stop">.</span>
              </h1>

              <form>
                <div className="input_group">
                  <div class="form-floating form-group mb-3 form-control-lg">
                    <input
                      type="name"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Name"
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div class="form-floating form-group mb-3 form-control-lg">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Email"
                    />
                    <label for="floatingInput">Email</label>
                  </div>
                </div>
                <div class="form-floating form-control-lg textArea-group">
                  <textarea
                    class="form-control"
                    placeholder="message"
                    id="floatingTextarea2"
                    rows="3"
                  ></textarea>
                  <label for="floatingTextarea2">Message</label>
                </div>
                <motion.button
                  class="btn btn-lg send-button"
                  variants={listAnimation}
                  whileHover="hover"
                  whileTap="tap"
                  type="submit"
                >
                  Send <RiMailSendLine />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
