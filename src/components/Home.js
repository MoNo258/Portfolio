import React from "react";
import Header from "./Header";
import HeroHome from "./HeroHome";
import ProjectsSection from "./ProjectsSection";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className='home'>
            <Header id='header' />
            <HeroHome id='heroHome' />
            <ProjectsSection id='projectsSection' />
            <AboutMe id='aboutMe' />
            <Contact id='contact' />
            <Footer id='footer' />
        </div>
    )
};

export default Home;