import React from "react";
import HeaderProject from "./HeaderProject";
import Footer from "./Footer";
import ProjectCardDetails from "./ProjectCardDetails";

import projectsData from "../data/projectsData";

const Project = ({id}) => {
    return (
        <div className='project' id='project'>
            <HeaderProject id='headerProject' />

            project's layout
            <ProjectCardDetails
                id={projectsData.index}
                key={projectsData.index}
                image={projectsData.image}
                title={projectsData.title}
                text={projectsData.text}
                demoLink={projectsData.demoLink}
                gitHubLink={projectsData.gitHubLink}
            />

            <Footer id='footer' />
        </div>
    )
};

export default Project;