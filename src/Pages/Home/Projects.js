import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProject from '../Shared/Hooks/useProject';
import ProjectOne from './ProjectOne';



const Projects = () => {
    const [project,setProject] = useProject();
    
    return (
        <div className='container mb-20 mx-auto'>
            <h1 data-aos="zoom-in" className='text-4xl text-center my-10 uppercase font-bold text-accent'>Projects</h1>
         <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>  
         {
             project.map(p=><ProjectOne project={p}></ProjectOne>)
         }
         </div>

          
        </div>
    );
};

export default Projects;