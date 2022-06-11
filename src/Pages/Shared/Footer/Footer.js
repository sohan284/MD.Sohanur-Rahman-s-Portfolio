import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebook } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='footer head'>

            <div data-aos="zoom-out-up"  className='flex items-center pt-5  justify-evenly lg:flex-row md:flex-row flex-col w-full'>
                <div className='text-accent justify-center'>
                    <img width={80}  className='rounded-full' src="https://i.ibb.co/frt5z2V/IMG20220311110215-01-removebg-preview-01.png" alt="" />
                    <h1 className='font-bold text-2xl'>MD.Sohanur Rahman Sohan</h1>
                    <h1 className='font-semibold text-lg'>Junior Web Developer</h1>
                </div>
                <div  className='flex  flex-col justify-center'>
                  
                    <div className='flex items-center'>
          <img width={35} src="https://i.ibb.co/5WR76z2/pngwing-com.png" alt="" />
          <p className='text-primary ml-2 text-lg font-bold'>+01788175088</p>
                    </div>
                    <div className='flex justify-between mt-3 items-center'>
          <img width={35} src="https://i.ibb.co/LvPDKrb/pngwing-com-5.png" alt="" />
          <p className='text-primary ml-2 text-lg font-bold'>sr.sohan088@gmail.com</p>
                    </div>
                    <div className='flex justify-between mt-3 items-center'>
          <img width={35} src="https://i.ibb.co/G3wLQMv/pngwing-com-6.png" alt="" />
          <p className='text-primary ml-2 text-lg font-bold'>Mirpur,Dhaka,Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;