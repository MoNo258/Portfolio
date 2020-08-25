import React from "react";
import HeaderProject from "./HeaderProject";
import Footer from "./Footer";
import ProjectCardDetails from "./ProjectCardDetails";
import {useParams} from "react-router-dom";
import projectsData from "../data/projectsData";
import BackButton from "./BackButton";

const Project = () => {

    let {projectId} = useParams();
    let id = parseInt(projectId) - 1;

    return (
        <div className='project' id={`/project/${id + 1}`}>
            <HeaderProject id='headerProject'/>
            <ProjectCardDetails className='projectCardDetails container'
                                id={projectsData[id].index}
                                key={projectsData[id].index}
                                image={projectsData[id].imageAlt}
                                title={projectsData[id].title}
                                text={projectsData[id].text}
                                textarea={projectsData[id].textarea}
                                demoLink={projectsData[id].demoLink}
                                gitHubLink={projectsData[id].gitHubLink}
            />
            <BackButton/>
            <Footer id='footer'/>
        </div>
    )
};

export default Project;