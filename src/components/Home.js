import React from "react";
import Header from "./Header";
import HeroHome from "./HeroHome";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <HeroHome />
            <Projects />
            <Contact />
            <Footer />
            <div className='svgIcons'>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
};

export default Home;