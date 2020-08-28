import React from "react";
import {Link as LinkScroll} from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';
import classNames from 'classnames';
import HeaderProject from "./HeaderProject";
import BackButton from "./BackButton";
import Footer from "./Footer";


const Success = ({id}) => {


    return (
        <>

            <div className='success' id={id} >
                <HeaderProject id='headerProject'/>
                <div className='success-message'>
                    <p>
                        Message was sent! Thank you.
                    </p>
                    <p>
                        I will reply soon!
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

export default Success;