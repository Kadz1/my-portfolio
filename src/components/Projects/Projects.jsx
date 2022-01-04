import React from 'react'
import "./projects.css"

const Projects = () => {
    return (
        <div className="projects-Wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <h1 className="projects-Header">To Do App</h1>
                        <p className="projects-Info">Universal bug tracker for everyone! BugVilla allows team members to collaborate, discuss and kill bugs effectively.</p>
                    </div>
                    <div className="col-sm-5">
                        <img className="projects-Img" src="/images/to-do-app-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
