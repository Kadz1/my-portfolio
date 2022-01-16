import React from "react";
import "./projects.css";
import { ProjectsCards } from "../../Data";

const Projects = () => {
  const Card = () => {
    return (
      <>
        {ProjectsCards.map((item) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div class="content">
                <div class="content-overlay"></div>
                <div className="image-background">
                  <img class="content-image" src={item.image} alt="" />
                </div>
                <div class="content-details fadeIn-top">
                  <h3>{item.description}</h3>
                  <p>This is a short description</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="projects-Wrapper" id="projects">
      <div className="container">
        <div className="row">
          <h1 className="projects-header">Projects</h1>
          <p class="projects-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem facilis tenetur asperiores!
          </p>
        </div>
      </div>
      <div class="container-fluid card-container">
        <div className="row g-0">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Projects;
