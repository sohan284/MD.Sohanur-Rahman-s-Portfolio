import React from 'react';
import About from './About';
import AboutMe from './AboutMe';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <hr />
            <About></About>
            <div class="divider"></div>
            <hr />
            <Projects></Projects>
            <hr />
            <ContactMe></ContactMe>
            <hr />
        
        </div>
    );
};

export default Home;