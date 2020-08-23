import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as RocketTag} from '../assets/rocket.svg';
import {ReactComponent as BlackTag} from '../assets/blackTag.svg';
import {ReactComponent as GitHubTag} from '../assets/github.svg';

const ProjectCardDetails = ({id, image, title, text, textarea, demoLink, gitHubLink}) => {
    return (
        <div className='projectCardDetails container' id={id}>
                <div className='project__cardCD card'>
                    <div className='cardCD__container'>
                        <div className='cardCD_picture'>
                            <img className='cardCD__image card-img-top' src={image}
                                 alt="project screenshot"/>
                        </div>
                        <div className='cardCD__body card-body'>
                            <h1 className='cardCD__title card-title'>
                                {title}
                            </h1>
                            <p className='cardCD__text card-text'>
                                {text}
                            </p>
                            <div className='cardCD__textarea'>
                                {textarea}



                                <h3 className='textarea__title'>
                                    This project uses:
                                </h3>
                                <ul className='textarea__list'>
                                    <li className='textarea__item'>
                                        JavaScript ES6
                                    </li>
                                    <li className='textarea__item'>
                                        React
                                    </li>
                                    <li className='textarea__item'>
                                        CSS and Sass
                                    </li>
                                    <li className='textarea__item'>
                                        Bootstrap & reactstrap
                                    </li>
                                    <li className='textarea__item'>
                                        Webpack (for configuration)
                                    </li>
                                    <li className='textarea__item'>
                                        REST API + WebSocket API
                                    </li>
                                    <li className='textarea__item'>
                                        Firebase
                                    </li>
                                    <li className='textarea__item'
                                        data-toggle="tooltip" data-placement="top"
                                        title="Black Dashboard React: Copyright 2018 Creative Tim" >
                                        GitHub repository: Black Dashboard React
                                    </li>
                                </ul>





                            </div>
                            <div className='cardCD__buttons '>
                                <a target='_blank' rel='noopener noreferrer'
                                   href={demoLink}
                                   className='cardCD__btn cardCD__btn--svg btn btn-dark'>
                                    <RocketTag className='button__image'/>
                                    Demo
                                </a>
                                <a target='_blank' rel='noopener noreferrer'
                                   href={gitHubLink}
                                   className='cardCD__btn cardCD__btn--svg btn btn-dark'>
                                    <GitHubTag className='button__image'/>
                                    Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    )
};

export default ProjectCardDetails;