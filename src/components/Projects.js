import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

const Projects = ({id}) => {
    return (
        <div className='projects' id={id}>
            <div className='projects__container container-fluid'>
                <div className='project__cardDeck card-deck'>
                    {projectsData.map(project => {
                        return <ProjectCard
                            key={project.index}
                            image={project.image}
                            title={project.title}
                            text={project.text}
                            demoLink={project.demoLink}
                            gitHubLink={project.gitHubLink}
                        />
                    })}
                </div>
            </div>
        </div>
    )
};

export default Projects;