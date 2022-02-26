import React from "react";
import "./projects.css";
import { ProjectsCards } from "../../Data";
import ButtonAnimation from "../ButtonAnimation/ButtonAnimation.js";

const Projects = () => {
  return (
    <div className="projects-Wrapper">
      <div className="card_container" id="projects">
        {ProjectsCards.map((item) => {
          return (
            <div
              key={item.id}
              className={`card ${item.id === 2 ? `card3` : ``}`}
            >
              <img
                src={item?.image}
                className="card__image"
                className={`card__image ${item.id === 2 ? `eCommerc_img` : ``}`}
              />
              <div class="card__overlay">
                <div class="overlay__text">
                  <h3>{item?.description}</h3>
                  <p>Plan your next adventure</p>
                  <ButtonAnimation label="GitHub" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
//  <div className="card card2">
//           <img
//             src="/images/27E2D14A-7B43-4363-8CFE-BB07DB84F13D_1_201_a.jpeg"
//             class="card__image"
//           />
//           <div class="card__overlay">
//             <div class="overlay__text">
//               <h3>Social Media App</h3>
//               <p>Plan your next adventure</p>
//               <GlobalComponents label="GitHub" />
//             </div>
//           </div>
//         </div>
//         <div className="card card3">
//           <img
//             className="eCommerc_img"
//             src="/images/pexels-nataliya-vaitkevich-6214452.jpg"
//             alt=""
//           />
//           <div class="card__overlay">
//             <div class="overlay__text">
//               <h3>E-Commerce</h3>
//               <p>Plan your next adventure</p>
//               <GlobalComponents label="GitHub" />
//             </div>
//           </div>
//         </div>
//         <div className="card card1">
//           <img src="/images/Blog.jpg" class="card__image" />
//           <div class="card__overlay">
//             <div class="overlay__text">
//               <h3>Personal Blog</h3>
//               <p>Plan your next adventure</p>
//               <GlobalComponents label="GitHub" />
//             </div>
//           </div>
//         </div>
//         <div className="card card2">
//           <div class="card__overlay">
//             <div class="overlay__text">
//               <h3>Mountain Trips</h3>
//               <p>Plan your next adventure</p>
//               <GlobalComponents label="GitHub" />
//             </div>
//           </div>
//         </div>
//         <div className="card card1">
//           <img src="/images/to-do.jpg" class="card__image" />
//           <div class="card__overlay">
//             <div class="overlay__text">
//               <h3>To Do App</h3>
//               <p>Plan your next adventure</p>
//               <GlobalComponents label="GitHub" />
//             </div>
//           </div>
//         </div>
