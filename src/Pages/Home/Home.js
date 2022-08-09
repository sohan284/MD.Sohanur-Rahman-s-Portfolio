import React from 'react';
import About from './About';
import AboutMe from './AboutMe';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <About></About>     
            <Projects></Projects>  
            <ContactMe></ContactMe>
        
        </div>
    );
};

export default Home;