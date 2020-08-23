import React from "react";
import {ReactComponent as RocketTag} from '../assets/rocket.svg';
import {ReactComponent as GitHubTag} from '../assets/github.svg';
import {ReactComponent as FileTag} from '../assets/file.svg';
import {ReactComponent as DocTag} from '../assets/document.svg';
import {ReactComponent as DotTag} from '../assets/dotCircle.svg';
import {ReactComponent as CursorTag} from '../assets/cursor.svg';

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
                                <FileTag className='cardCD__tag cardCD__tag--title'/>
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
                                <ul className='textarea__list' >
                                    <li className='textarea__item' >
                                        <CursorTag className='cardCD__tag cardCD__tag--list' />
                                        JavaScript ES6
                                    </li>
                                    <li className='textarea__item'>
                                        <CursorTag className='cardCD__tag cardCD__tag--list' />
                                        React
                                    </li>
                                    <li className='textarea__item'>
                                        <CursorTag className='cardCD__tag cardCD__tag--list' />
                                        CSS and Sass
                                    </li>
                                    <li className='textarea__item'>
                                        <CursorTag className='cardCD__tag cardCD__tag--list' />
                                        Bootstrap & reactstrap
                                    </li>
                                    <li className='textarea__item'>
                                        <CursorTag className='cardCD__tag cardCD__tag--list' />
                                        Webpack (for configuration)
                                    </li>
                                    <li className='textarea__item'>
                                        <CursorTag className='cardCD__tag cardCD__tag--list' />
                                        REST API + WebSocket API
                                    </li>
                                    <li className='textarea__item'>
                                        <CursorTag className='cardCD__tag cardCD__tag--list' />
                                        Firebase
                                    </li>
                                    <li className='textarea__item'
                                        data-toggle="tooltip" data-placement="top"
                                        title="Black Dashboard React: Copyright 2018 Creative Tim" >
                                        <CursorTag className='cardCD__tag cardCD__tag--list' />
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