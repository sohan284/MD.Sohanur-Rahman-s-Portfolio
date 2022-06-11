import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate= useNavigate();

    const moreDetails = () =>{
        navigate('/aboutMe')
    }
    return (
        <div class="hero aboutMe min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          
          <div data-aos="zoom-out-up">
            <h1  class="text-5xl text-primary font-bold">About Me</h1>
          
            <p class="py-6 text-primary">
            <span className='text-primary font-semibold text-xl'>Hello! I'm MD.Sohanur Rahman Sohan, from Dhaka, Bangladesh. <br /> I’am a junior front end developer. Usually I create applications with reactjs.</span></p>
            <button onClick={moreDetails} class="btn btn-primary">Explore more</button>
          </div>
         
          <div  data-aos="zoom-in">
          <img src="https://i.ibb.co/SyVLG62/IMG20211224173054-removebg-preview.png" class="max-w-sm rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    );
};

export default About;