import React from "react";
import { ReactComponent as LinkedInTag } from '../assets/linkedin.svg';
import { ReactComponent as GitHubTag } from '../assets/github.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <nav className='navbar navbar-dark bg-dark footer__navbar'>
                <div className=' footer__copyright'>
                    © Copyright by MoNo258 2020
                </div>
                <ul className='nav justify-content-end footer__list--ul'>
                    <li className='nav-item footer__item'>
                        <a target='_blank' rel='noopener noreferrer'
                           href='https://www.linkedin.com/in/monika-nowogorska/'
                           className='nav-link footer__link'>
                            <LinkedInTag className='footer__icon footer__icon--linkedin'/>
                        </a>
                    </li>
                    <li className='nav-item footer__item'>
                        <a target='_blank' rel='noopener noreferrer'
                           href='https://github.com/MoNo258/'
                           className='nav-link footer__link'>
                            <GitHubTag className='footer__icon footer__icon--github'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Footer;