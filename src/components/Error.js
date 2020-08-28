import React from "react";
import {Link as LinkScroll} from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';
import classNames from 'classnames';
import HeaderProject from "./HeaderProject";
import BackButton from "./BackButton";
import Footer from "./Footer";


const Error = ({id}) => {


    return (

        <>

            <div className='error' id={id} >
                <HeaderProject id='headerProject'/>
                <div className='error-message'>
                    <p>
                        Sent error! Sorry.
                    </p>
                    <p>
                        Please try again...
                    </p>
                </div>

                {/*<Link to="/#contact" className='nav-link header__link'>*/}
                {/*    Contact me*/}
                {/*</Link>*/}
                <BackButton/>
                <Footer id='footer'/>
            </div>


        </>



    )
};

export default Error;