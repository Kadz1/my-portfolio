import React from "react";
import "./projects.css";
import { ProjectsCards } from "../../Data";

const Projects = () => {
  const Card = () => {
    return (
      <>
        {ProjectsCards.map((item) => {
          return (
            <div class="col-md-4 col-sm-6 nopadding ">
              <div class="box">
                <img src={item.image} alt="" />
                <div class="box-content">
                  <h3 class="title">{item.description}</h3>
                  <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="projects-Wrapper" id="projects">
      <div className="container-fluid card-container">
        <div className="row">
          <div className="col-md-4 col-sm-6 nopadding">
            <h1 className="projects-header">
              Projects
              <span className="full-stop">.</span>
            </h1>
            <p class="projects-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem facilis tenetur asperiores!
            </p>
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Projects;

// const Card = () => {
//   return (
//     <>
//       {ProjectsCards.map((item) => {
//         return (
//           <div className="col-lg-4 col-md-6 col-sm-12 ">
//             <div class="content">
//               <div class="content-overlay"></div>
//               <div className="image-background">
//                 <img class="content-image" src={item.image} alt="" />
//               </div>
//               <div class="content-details fadeIn-top">
//                 <h3>{item.description}</h3>
//                 <p>This is a short description</p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

//  {/* <div className="container">
//     <div className="row">
//       <h1 className="projects-header">Projects</h1>
//       <p class="projects-para">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Exercitationem facilis tenetur asperiores!
//       </p>
//     </div>
//   </div>
//   <div class="container-fluid card-container">
//     <div className="row g-0 card-row">
//       <Card />
//     </div>
//   </div> */}
