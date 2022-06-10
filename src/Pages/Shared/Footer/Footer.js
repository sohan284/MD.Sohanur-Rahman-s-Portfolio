import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebook } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='footer head'>

            <div data-aos="zoom-out-up"  className='flex items-center pt-10  justify-around w-full'>
                <div className='text-center text-accent justify-center'>
                    Copyright @ All right reserved
                </div>
                <div  className='flex justify-center  footerIcon'>
                    <a className="link mr-1 link-hover border-2 rounded-full" href='https://www.facebook.com/SrSohan2748' target='blank'>
          <img width={40} src="https://i.ibb.co/7Sv45pg/facebook-circle.png" alt="" /></a>
          <a className="link link-hover border-2 rounded-full" href='https://github.com/sohan284' target='blank'>
          <img width={42} src="https://i.ibb.co/8dQKqtG/68747470733a2f2f64617368626f6172642e736e617063726166742e696f2f736974655f6d656469612f6170706d65646961.png" alt="" /></a>
          <a className="link link-hover ml-1 border-2 rounded-full" href='https://www.linkedin.com/in/sr-sohan-1621a0199/' target='blank'>
          <img width={43} src="https://i.ibb.co/h1bwTJB/linked-in-icon-18.png" alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;