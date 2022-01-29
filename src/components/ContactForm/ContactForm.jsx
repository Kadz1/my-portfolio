import React from "react";
import "./contactForm.css";
import { GoPerson } from "react-icons/go";

const ContactForm = () => {
  return (
    <div className=" contact-wrapper">
      <div className="container  contact-container">
        <div class="row contact-row">
          <div class="col-4 g-0">
            <img className="contact-img" src="/images/TexTure.jpeg" alt="" />
          </div>
          <div class="col-8 contact-col-8">
            <div className="title-container">
              <h2 className="form-title">Contact Me</h2>
            </div>
            <div className="form-container">
              <form>
                <div class="form-floating mb-3">
                  <input
                    type="name"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Name"
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Email"
                  />
                  <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                  ></textarea>
                  <label for="floatingTextarea2">Message</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
