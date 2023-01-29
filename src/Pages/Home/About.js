import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate= useNavigate();

    const moreDetails = () =>{
        navigate('/aboutMe')
    }
    return (
        <div class="hero aboutMe">
        <div class="hero-content flex-col lg:flex-row">
          <div>
          <h1 data-aos="zoom-in"
     className='text-4xl text-center my-20 uppercase font-bold mx-auto container py-2 foot text-accent border-x-4'>About me</h1>
          
            <p data-aos="fade-up"
     data-aos-duration="200" class="py-6 text-primary">
            <span  className='text-primary font-semibold text-xl'>Hello! I'm MD.Sohanur Rahman Sohan, from Dhaka, Bangladesh. <br /> I’am a junior front end developer. Usually I create applications with reactjs.</span></p>
            <button data-aos="fade-up"
     data-aos-duration="300" onClick={moreDetails} class="btn foot">Explore more</button>
          </div>
         
         
        </div>
      </div>
    );
};

export default About;