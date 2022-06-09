import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <hr />
            <div class="divider"></div>
            <AboutMe></AboutMe>
            <hr />
            <Projects></Projects>
            <hr />
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;