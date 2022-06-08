import React from 'react';

const Banner = () => {
    return (
        <div class="hero bgimg min-h-screen bg-black">
  <div class="hero-content flex-col lg:flex-row">
    <img  src="https://i.ibb.co/frt5z2V/IMG20220311110215-01-removebg-preview-01.png" class="max-w-sm rounded-lg shadow-2xl" />
    <div className='ml-20'>
      <h1 class="text-5xl text-accent font-bold">HI!</h1>
      <h1 class="text-5xl text-accent font-bold">I AM SOHANUR <br /> RAHMAN</h1>
      <div className='typewriter'>
        <h1>Front-end Developer</h1>
      </div>
      
      <a href='https://drive.google.com/file/d/1eFXo6i3eGtsTy0A_o6opY7P4OS7HiG5z/view?usp=sharing' target="_blank"  class="btn mt-16 btn-primary">Download Resume</a>
    </div>
  </div>
</div>
    );
};

export default Banner;