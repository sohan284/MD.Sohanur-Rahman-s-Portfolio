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
            <span className='text-primary font-semibold text-xl'>Hello! I'm MD.Sohanur Rahman Sohan, from Dhaka, Bangladesh.</span> <br /> I’am a junior front end developer. Usually I create applications with reactjs.My goal is to finish the task on time and trying to learn more. Currently I am pursuing Bachelor’s Degree in Software Engineering.</p>
            <button onClick={moreDetails} class="btn btn-primary">More Details</button>
          </div>
         
          <div  data-aos="zoom-in">
          <img src="https://i.ibb.co/FDQWVyW/IMG-20210618-135229-01.jpg" class="max-w-sm rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    );
};

export default About;