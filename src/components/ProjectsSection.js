import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

const ProjectsSection = ({id}) => {
    return (
        <div className='projectsSection' id={id}>
            <div className='projects__container container-fluid'>
                <div className='project__cardDeck card-deck'>
                    {projectsData.map(project => {
                        return <ProjectCard
                            key={project.index}
                            id={project.index}
                            image={project.image}
                            title={project.title}
                            text={project.text}
                            demoLink={project.demoLink}
                            gitHubLink={project.gitHubLink}
                            notes={project.notes}
                            exampleLogin={project.exampleLogin}
                        />
                    })}
                </div>
            </div>
        </div>
    )
};

export default ProjectsSection;