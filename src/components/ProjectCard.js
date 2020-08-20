import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as RocketTag} from '../assets/rocket.svg';
import {ReactComponent as BlackTag} from '../assets/blackTag.svg';
import {ReactComponent as GitHubTag} from '../assets/github.svg';

const ProjectCard = ({image, title, text, demoLink, gitHubLink}) => {
    return (
        <div className='projects__col col-xl-4 col-lg-6 col-md-6 col-sm-12'>
            <div className='project__card card'>
                <div className='card__container'>
                    <Link to='/project' className='card__btn--image card__btn'>
                        <img className='card__image card-img-top' src={image}
                             alt="project screenshot"/>
                    </Link>
                    <div className='card__body card-body'>
                        <h5 className='card__title card-title'>
                            {title}
                        </h5>
                        <p className='card__text card-text'>
                            {text}
                        </p>
                        <div className='card__buttons '>
                            <Link to='/project' className='card__btn card__btn--svg btn btn-dark'>
                                <BlackTag className='button__image'/>
                                Details
                            </Link>
                            <a target='_blank' rel='noopener noreferrer'
                               href={demoLink}
                               className='card__btn card__btn--svg btn btn-dark'>
                                <RocketTag className='button__image'/>
                                Demo
                            </a>
                            <a target='_blank' rel='noopener noreferrer'
                               href={gitHubLink}
                               className='card__btn card__btn--svg btn btn-dark'>
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

export default ProjectCard;