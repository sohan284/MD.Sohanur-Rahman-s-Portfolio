import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const moreDetails = () => {
    navigate('/aboutMe')
  }
  return (
    <div class="hero bgimg min-h-screen bgBanner">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div data-aos="fade-up" >
          <img src="https://i.ibb.co/B3C5XcV/diu.jpg" class="max-w-sm rounded shadow-2xl" />
        </div>
        <div data-aos="fade-up" className='ml-20'>
          <h1 class="text-5xl text-accent font-bold">HI!</h1>
          <h1 class="text-5xl text-accent font-bold">I AM SOHANUR <br /> RAHMAN</h1>
          <div data-aos="fade-down" className='typewriter'>
            <h1 className='text-[gray]'>Front-end Developer</h1>
          </div>
          <p className='text-sm font-bold text-primary mt-5 mb-2'>Connect Me</p>
          <div data-aos="fade-up" className='flex footerIcon'>

            <a className="link mr-1 link-hover border-2 rounded-full" href='https://www.facebook.com/SrSohan2748' target='blank'>
              <img width={20} src="https://i.ibb.co/7Sv45pg/facebook-circle.png" alt="" /></a>
            <a className="link link-hover border-2 rounded-full" href='https://github.com/sohan284' target='blank'>
              <img width={22} src="https://i.ibb.co/8dQKqtG/68747470733a2f2f64617368626f6172642e736e617063726166742e696f2f736974655f6d656469612f6170706d65646961.png" alt="" /></a>
            <a className="link link-hover ml-1 border-2 rounded-full" href='https://www.linkedin.com/in/sr-sohan-1621a0199/' target='blank'>
              <img width={23} src="https://i.ibb.co/h1bwTJB/linked-in-icon-18.png" alt="" /></a>
          </div>

          <button data-aos="fade-up"
            data-aos-duration="300" onClick={moreDetails} class="btn mt-16 foot">Explore more</button>
        </div>
      </div>

    </div>
  );
};

export default Banner;