import React from "react";
import { ReactComponent as RocketTag } from '../assets/rocket.svg';
import { ReactComponent as GitHubTag } from '../assets/github.svg';
import { ReactComponent as FileTag } from '../assets/file.svg';
import { ReactComponent as KeyTag } from "../assets/key.svg";
import { ReactComponent as BulbTag } from "../assets/bulb.svg";

const ProjectCardDetails = ({id, image, title, text, textarea, demoLink, gitHubLink, notes, exampleLogin, story}) => {

    const textareaFunction = () => {
        return {__html: textarea};
    };

    return (
        <div className='projectCardDetails col-xl-9 col-lg-10 col-md-12 col-sm-12' id={id}>
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
                        <div className='cardCD__textarea'
                             dangerouslySetInnerHTML={textareaFunction()}>
                        </div>
                        <p className='cardCD__text cardCD__text--story'>
                            <span>Story behind the project: </span>{story}
                        </p>
                        <p className='cardCD__text cardCD__text--bottomRWD card-text'>
                            <BulbTag className='cardCD__tag '/>
                            {notes}
                        </p>
                        <p className='cardCD__text cardCD__text--bottomKey card-text'>
                            { !exampleLogin ? null
                            :
                                <>
                                    <KeyTag className='cardCD__tag '/> {exampleLogin}
                                </>
                            }
                        </p>
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