import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-Wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="about-H1">
              About Me<span className="full-stop">.</span>
            </h1>
            <p className="about-info-text">
              I am a self-taught passionate FrontEnd developer, currently
              working at Razorpay as a FrontEnd engineer. I've been building
              stuff on the web since when I was in 6th standard, I've made
              countless side projects and I also posses magical powers of using
              react to build delightful user interfaces.
            </p>
          </div>
          <div class="row card-row">
            <div class="col-md-4 ">
              <div class="card border-0">
                <div class="card-body">
                  <img
                    class="card-img"
                    src="/images/why-img1.png"
                    alt="Image"
                  />
                  <p class="card-text">
                    I want to build accessible, inclusive products and digital
                    experiences at an innovative and exciting company.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card border-0">
                <div class="card-body">
                  <img
                    class="card-img"
                    src="/images/how-img.jpeg"
                    alt="Image"
                  />
                  <p class="card-text">
                    I want to build accessible, inclusive products and digital
                    experiences at an innovative and exciting company.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card border-0">
                <div class="card-body">
                  <img
                    class="card-img"
                    src="/images/goals-img.jpeg"
                    alt="Image"
                  />
                  <p class="card-text">
                    I want to build accessible, inclusive products and digital
                    experiences at an innovative and exciting company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
