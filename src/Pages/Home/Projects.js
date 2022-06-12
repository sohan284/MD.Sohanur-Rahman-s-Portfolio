import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProject from '../Shared/Hooks/useProject';
import ProjectOne from './ProjectOne';



const Projects = () => {
    const [project,setProject] = useProject();
    
    return (
        <div className='container min-h-screen mx-auto'>
            <h1 data-aos="zoom-in" className='text-4xl text-center my-20 uppercase font-bold container mx-auto py-2 foot text-accent border-x-8'>Projects</h1>
         <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>  
         {
             project.map(p=><ProjectOne project={p}></ProjectOne>)
         }
         </div>

          
        </div>
    );
};

export default Projects;