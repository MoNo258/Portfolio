import React from "react";
import Header from "./Header";
import HeroHome from "./HeroHome";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";


const Home = () => {
    return (
        <div className='home'>
            <Header id='header' />
            <HeroHome id='heroHome' />
            <Projects id='projects' />
            <Contact id='contact' />
            {/*<Footer id='footer' />*/}
            {/*<div className='svgIconsInfo'>*/}
            {/*    Icons made by <span>Dave Gandy</span> from*/}
            {/*    <a target='_blank' rel='noopener noreferrer' href='https://www.flaticon.com/' title='Flaticon'>*/}
            {/*        www.flaticon.com*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    )
};

export default Home;