import React, { useState } from "react";
import { Link as LinkScroll } from 'react-scroll';
import classNames from 'classnames';


const Header = ({id}) => {
    const [toggleOpen, setToggleOpen] = useState(false);

    const handleButtonClick = () => {
        setToggleOpen(!toggleOpen);
    };

    return (
        <div className='header' id={id} >
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top header__navbar' >
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/MoNo258'
                   className='navbar-brand header__brand'>
                    MoNo258
                </a>
                <button className="navbar-toggler header__button" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={handleButtonClick}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id='navbarSupportedContent'
                    className={classNames('collapse navbar-collapse justify-content-end header__list',{'show':toggleOpen})}
                >
                    <ul className='navbar-nav mr-auto header__list--ul'>
                        <li className='nav-item header__item'>
                            <LinkScroll to='heroHome' className='nav-link header__link'
                                        spy={true} smooth={true} offset={0} duration={250}>
                                Start
                            </LinkScroll>
                        </li>
                        <li className='nav-item  header__item'>
                            <LinkScroll to='projectsSection' className='nav-link header__link'
                                        spy={true} smooth={true} offset={-50} duration={500}>
                                Projects
                            </LinkScroll>
                        </li>
                        <li className='nav-item  header__item'>
                            <LinkScroll to='aboutMe' className='nav-link header__link'
                                        spy={true} smooth={true} offset={0} duration={500}>
                                About me
                            </LinkScroll>
                        </li>
                        <li className='nav-item  header__item'>
                            <LinkScroll to='contact' className='nav-link header__link'
                                        spy={true} smooth={true} offset={0} duration={500}>
                                Contact me
                            </LinkScroll>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Header;