import React from "react";
import heroBackground from '../assets/tree_fog.jpg';
import {Link as LinkScroll} from 'react-scroll'

const HeroHome = ({id}) => {

    const styleBackground = {
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
    };

    return (
        <div className='heroHome' id={id} style={styleBackground}>
            <div className='hero__container'>
                <h1 className='hero__header'>
                    <span>Hi :)</span>
                    <span>I am Junior Web Developer.</span>
                </h1>
                <div className='hero__button'>
                    <LinkScroll to='projects' className='hero__link'
                                spy={true} smooth={true} offset={0} duration={500}>
                        Checkout my projects
                    </LinkScroll>
                </div>
            </div>
        </div>
    )
};

export default HeroHome;