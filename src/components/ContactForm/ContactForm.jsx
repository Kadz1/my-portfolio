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
// {/* Name & Email Input Area */}
//               <div class="row">
//                 <div class="col-8 mx-auto form-group">
//                   <input
//                     type=""
//                     placeHolder=""
//                     autoComplete="off"
//                     class="form-control"
//                     id="name"
//                     name="name"
//                     required
//                   />
//                   <label for="name">Name</label>
//                 </div>
//               </div>
//               <div class="row">
//                 <div class="col-8 mx-auto form-group">
//                   <input
//                     type="text"
//                     placeHolder=""
//                     autoComplete="off"
//                     class="form-control"
//                     id="email"
//                     name="email"
//                     required
//                   />
//                   <label for="email">Email</label>
//                 </div>
//               </div>

//               {/* Message Input Area */}
//               <div class="row">
//                 <div class="col-8 mx-auto form-group ">
//                   <textarea
//                     class="message form-control"
//                     placeHolder=""
//                     type="text"
//                     id="message"
//                     autoComplete="off"
//                     name="message"
//                     maxlength="3000"
//                     rows="6"
//                   ></textarea>
//                   <label for="message">Message</label>
//                 </div>
//               </div>
