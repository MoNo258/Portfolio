import React from "react";
import image from '../assets/tree_fog.jpg'
import {Link} from "react-router-dom";

const Projects = ({id}) => {
    return (
        <div className='projects' id={id}>
            <div className='projects__container container'>
                <div className='projects__row row'>
                    <div className='projects__col col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                        <div className='project__card card'>
                            <div className='card__container'>
                                <img className='card__image card-img-top' src={image} alt="project screenshot"/>
                                <div className='card__body card-body'>
                                    <h5 className='card__title card-title'>
                                        Exchange Rates Board
                                    </h5>
                                    <p className='card__text card-text'>
                                        Projects that displays exchange rates taken from API
                                    </p>
                                    <Link to='/project' className='card__btn btn btn-dark'
                                        // onClick={}
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projects__col col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                        <div className='project__card card'>
                            <div className='card__container'>
                                <img className='card__image card-img-top' src={image} alt="project screenshot"/>
                                <div className='card__body card-body'>
                                    <h5 className='card__title card-title'>
                                        Exchange Rates Board
                                    </h5>
                                    <p className='card__text card-text'>
                                        Projects that displays exchange rates taken from API
                                    </p>
                                    <Link to='/project' className='card__btn btn btn-dark'
                                        // onClick={}
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projects__col col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                        <div className='project__card card'>
                            <div className='card__container'>
                                <img className='card__image card-img-top' src={image} alt="project screenshot"/>
                                <div className='card__body card-body'>
                                    <h5 className='card__title card-title'>
                                        Exchange Rates Board
                                    </h5>
                                    <p className='card__text card-text'>
                                        Projects that displays exchange rates taken from API
                                    </p>
                                    <Link to='/project' className='card__btn btn btn-dark'
                                        // onClick={}
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Projects;