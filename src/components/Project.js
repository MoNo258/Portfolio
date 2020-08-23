import React from "react";
import HeaderProject from "./HeaderProject";
import Footer from "./Footer";
import ProjectCardDetails from "./ProjectCardDetails";
import {useParams} from "react-router-dom";

import projectsData from "../data/projectsData";

const Project = () => {

    let {projectId} = useParams();
    let id = parseInt(projectId) -1 ;

    return (
        <div className='project' >
            <HeaderProject id='headerProject' />

            <ProjectCardDetails className='projectCardDetails container'
                id={projectsData[id].index}
                key={projectsData[id].index}
                image={projectsData[id].image}
                title={projectsData[id].title}
                text={projectsData[id].text}
                demoLink={projectsData[id].demoLink}
                gitHubLink={projectsData[id].gitHubLink}
            />
            
            <Footer id='footer' />
        </div>
    )
};

export default Project;