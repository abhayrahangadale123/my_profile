import React from 'react';
import "./Project.css";
import Project_data from "../../assets/Project_Data";  // or `import Project_data` if it's a default export

const Project = () => {
    return (
        <>
            <div id="Project" className="project">
                <div className="project_tittle">
                <h1>My Projects</h1>
                </div>
                <div className="all_project">
                    <div className="card">
                        {
                            Project_data.map((project, index) => (
                                <div key={index} className="project_formet">
                                    <h3>{project.S_no}</h3>
                                    <h2>{project.S_Name}</h2>
                                    <p>{project.S_desc}</p>
                                    <div className="links">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">Read more ➡️</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
