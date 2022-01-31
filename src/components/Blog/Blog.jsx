import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog-Wrapper" id="blog">
      <div className="container-fluid blog-container">
        <div className="row">
          <div className="col-12">
            <div className="blog-slogan-container">
              <span className="blog-slogan">Read all about it!</span>
            </div>
            <h1 className="blog-h1">
              The <br /> Blog.
            </h1>
          </div>
        </div>
        <div className="blog-content">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <h3 className="blog-h3">WHY YOU NEED A PROFESSIONAL DESIGNER.</h3>
              <div>
                <p className="blog-p">
                  Don’t rush or skip any steps. Start with the basics for better
                  results.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <h3 className="blog-h3">WHY YOU NEED A PROFESSIONAL DESIGNER.</h3>
              <div>
                <p className="blog-p">
                  Don’t rush or skip any steps. Start with the basics for better
                  results.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <h3 className="blog-h3">WHY YOU NEED A PROFESSIONAL DESIGNER.</h3>
              <div>
                <p className="blog-p">
                  Don’t rush or skip any steps. Start with the basics for better
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
