import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();


  return (
    <div class="aboutMe">
      <div class="flex-col lg:flex-row">
        <div>
          <h1 data-aos="zoom-in"
            className='text-4xl text-center my-20 uppercase font-bold mx-auto container py-2 foot text-accent border-x-4'>About me</h1>

          <p data-aos="fade-up"
            data-aos-duration="200" class="py-6 text-primary">
            <span className='text-primary font-semibold text-xl'>Hello! I'm MD.Sohanur Rahman Sohan, from Dhaka, Bangladesh. <br /> I’am a junior front end developer. Usually I create applications with .....</span></p>
          

         <div className='grid justify-center my-5 lg:grid-cols-3 gap-5 mx-10'>
         <div data-aos="zoom-in"  class="card border border-gray-600 foot text-primary shadow-xl">
            <figure><img  src="https://i.ibb.co/WyWz3Pw/png-clipart-website-development-javascript-html5-css3-cascading-style-sheets-html-logo-web-design-te.png" alt="Shoes" /></figure>
            <div class="card-body">
              <h1 class="card-title">
                Plain HTML CSS developer
                
              </h1>
              <p>I can build website using Plain HTML and Vanilla CSS with Javascript.I can also use Bootstrap and Tailwind.</p>
              <div class="card-actions justify-end">
                <div class="badge  font-semibold badge-outline">HTML</div>
                <div class="badge  font-semibold badge-outline">CSS</div>
                <div class="badge  font-semibold badge-outline">JavaScript</div>
             
              </div>
            </div>
          </div>
         <div data-aos="zoom-in" class="card border border-gray-600 foot text-primary shadow-xl">
            <figure><img  src="https://i.ibb.co/YRsm0pN/react-redux-firebase-removebg-preview.png" alt="Shoes" /></figure>
            <div class="card-body">
              <h1 class="card-title">
                Front End Development
               
              </h1>
              <p>I can build responsive Single Page Application using React.js with Private & Nested Routing and Firebase Authentication.</p>
              <div class="card-actions justify-end">
                <div class="badge  font-semibold badge-outline">React JS </div>
                <div class="badge  font-semibold badge-outline">Redux</div>
                <div class="badge  font-semibold badge-outline">Firebase</div>
              </div>
            </div>
          </div>
         <div data-aos="zoom-in" class="card border shadow-2xl  border-gray-600 foot text-primary shadow-xl">
            <figure><img  src="https://i.ibb.co/s2H8Pfw/images-4-removebg-preview.png" alt="Shoes" /></figure>
            <div class="card-body">
              <h1 class="card-title">
                Plain HTML CSS developer
              
              </h1>
              <p>I can develop Full Stack Web Application using React.js, Node.js, Express.js and MongoDB with authorization features (jwt token, admin role etc).</p>
              <div class="card-actions justify-end">
                <div class="badge  font-semibold badge-outline">Node JS</div>
                <div class="badge  font-semibold badge-outline">Express</div>
                <div class="badge  font-semibold badge-outline">MongoDB</div>
              </div>
            </div>
          </div>
         </div>
        </div>
       

      </div>
    </div>
  );
};

export default About;