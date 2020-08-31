import React from "react";
import { ReactComponent as ArrowTag } from '../assets/leftArrow.svg';
import { HashLink as Link } from 'react-router-hash-link';


const BackButton = () => {
    const actualRoute = window.location.href;
    const arrayFromActualRoute = actualRoute.split('/');
    const arrayLength = arrayFromActualRoute.length;
    const currentPathName = arrayFromActualRoute[arrayLength - 1];

    return (
        <>
            {(currentPathName === 'success') || (currentPathName === 'error')
                ?
                <div className='backButton'>
                    <Link to="/#heroHome" className='backBtn__btn backBtn__btn--svg btn btn-dark'>
                        <ArrowTag className='button__image'/>
                        Back
                    </Link>
                </div>
                :
                <div className='backButton'>
                    <Link to="/#projectsSection" className='backBtn__btn backBtn__btn--svg btn btn-dark'>
                        <ArrowTag className='button__image'/>
                        Back
                    </Link>
                </div>
            }
        </>
    )
};

export default BackButton;