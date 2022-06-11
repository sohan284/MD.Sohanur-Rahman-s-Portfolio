import React from 'react';

const PerfectCouple = () => {
    const project =  {
        "id": 3,
        "name": "Perfect Couple",
        "type": "Photography",
        "live": "https://perfect-couple-90811.web.app/",
        "cscode": "https://github.com/sohan284/Perfect-Couple-firebase",
        "sscode": "https://github.com/sohan284/Perfect-Couple-firebase",
        "desc":[
            "● Log in and signup with email and password.Also can log in by google",
            "● Also can log in by google.",
            "● Homepage has a banner and a services section with some photography services.",
            "● User can checkout if he is logged in ."
        ],
        "tech": [
            "● Javascript",
            "● React",
            "● Netlify",
            "● React Router"
            ,"● Firebase"
            ,"● HTML"
            ,"● CSS(Tailwind)"
        ],
        "img": [
            "https://i.ibb.co/q93RJv5/Screenshot-26.png",
            "https://i.ibb.co/D4b38WG/Screenshot-27.png",
"https://i.ibb.co/zx51LZq/Screenshot-28.png",
"https://i.ibb.co/rv3pfp7/Screenshot-29.png"
        ]
    }
    return (
        <div className='flex my-10 justify-center'>
      <div>
      <h1 className='text-4xl  text-center font-bold text-primary '>{project.name}</h1>
      <h1 className='text-xl mb-3 text-center font-semibold text-primary '>{project.type}</h1>
      <hr />
      <div className='flex justify-evenly my-5'>
        <a className='btn rounded-xl  bg-primary text-black font-bold' href={project.cscode}>CLIENT SITE</a>
        <a className='btn rounded-full bg-primary text-black font-bold' href={project.live}>LIVE</a>
        <a className='btn rounded-xl bg-primary text-black font-bold' href={project.sscode}>SERVER SITE</a>
      </div>
          <div class="h-96 carousel prjImg carousel-vertical rounded-box">
            <div class="carousel-item h-full">
              <img src={project.img[0]} />
            </div>
            <div class="carousel-item h-full">
              <img src={project.img[1]} />
            </div>
            <div class="carousel-item h-full">
              <img src={project.img[2]} />
            </div>
            <div class="carousel-item w-full h-full">
              <img src={project.img[3]} />
            </div>
    
            

          </div>
          <div className='flex flex-col justify-between'>
          <div>
            <hr className='mt-10' />
            <h1 className='text-3xl font-bold text-primary my-5'>Technology:</h1>
              <ul className='text-primary ml-5 text-lg'>
                
               
                  <div className='text-md font-semibold'>
                  <li>{project.tech[0]}</li>
                <li>{project.tech[1]}</li>
                <li>{project.tech[2]}</li>
                <li>{project.tech[3]}</li>
                <li>{project.tech[4]}</li>
                <li>{project.tech[5]}</li>
                <li>{project.tech[6]}</li>
                  </div>
               
              </ul>
            </div>
            <div>
            <h1 className='text-3xl mt-10 font-bold text-primary my-5'>Features:</h1>
              <ul className='text-primary ml-5 text-lg'>
                <li>{project.desc[0]}</li>
                <li>{project.desc[1]}</li>
                <li>{project.desc[2]}</li>
                <li>{project.desc[3]}</li>
              </ul>
            </div>
          
            </div>
      </div>
        </div>
      );
    };
    
export default PerfectCouple;