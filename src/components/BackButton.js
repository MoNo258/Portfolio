import React from "react";
import {ReactComponent as ArrowTag} from '../assets/leftArrow.svg';
import {HashLink as Link} from 'react-router-hash-link';

const BackButton = () => {
    return (
        <div className='backButton'>
            <Link to="/#projectsSection" className='backBtn__btn backBtn__btn--svg btn btn-dark'>
                <ArrowTag className='button__image'/>
                Back
            </Link>
        </div>
    )
};

export default BackButton;