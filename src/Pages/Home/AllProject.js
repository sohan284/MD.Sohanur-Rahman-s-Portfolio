import React from 'react';

const AllProject = ({project}) => {
    const {name,img,type,live,cscode,sscode,desc,tech} = project;
    return (
        <div className='flex justify-center'>
            <div className=' mt-5  rounded-lg'>
                <h1 className='text-4xl font-bold text-primary text-center'>{name}</h1>
                <h1 className='text-xl font-semibold text-primary text-center'>{type}</h1>
                
            <div data-aos="zoom-out-up" class="h-96 carousel projectImg carousel-vertical rounded-box">
                
                <div  class="carousel-item h-full">
                  <img src={img[0]} />
                </div> 
                <div class="carousel-item h-full">
                  <img src={img[1]} /> 
                </div>
                <div class="carousel-item h-full">
                  <img src={img[2]} /> 
                </div>
                <div class="carousel-item h-full">
                  <img src={img[3]} /> 
                </div>
              </div>
            <div data-aos="zoom-out-up">
            <h1 className='text-primary text-2xl  font-bold p-2'>Features : </h1>
            <ul className='ml-10 '>
                <li className='text-primary'>{desc[0]}</li>
                <li className='text-primary'>{desc[1]}</li>
                <li className='text-primary'>{desc[2]}</li>
                <li className='text-primary'>{desc[3]}</li>
            </ul>
            <h1 className='text-primary text-2xl  font-bold p-2'>Technology : </h1>
            <ul >
              <div className='flex justify-between'>
                <div>
                <li className='text-primary font-semibold pl-10 py-1'>{tech[0]}</li>
            <li className='text-primary font-semibold pl-10 py-1'>{tech[1]}</li>
            <li className='text-primary font-semibold pl-10 py-1'>{tech[2]}</li>
           
                </div>
                <div>
                <li className='text-primary font-semibold pl-10 py-1'>{tech[3]}</li>
                <li className='text-primary font-semibold pl-10 py-1'>{tech[4]}</li>
           
                </div>
                <div>
           
            <li className='text-primary font-semibold pl-10 py-1'>{tech[5]}</li>
            <li className='text-primary font-semibold pl-10 py-1'>{tech[6]}</li>
                </div>
              </div>
            
            
            </ul>
            <div className='flex pb-20 justify-between projectImg'>
                    <a href={cscode} className='bg-primary text-black font-bold btn '>Client Site</a>
                    <a href={live} className='bg-primary rounded-full text-black font-bold btn '>Live</a>
                    <a href={sscode} className='bg-primary text-black font-bold btn '> Server Site</a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AllProject;