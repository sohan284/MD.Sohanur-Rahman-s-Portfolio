import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectOne = ({project}) => {
    const {name,img,type,id} = project;
    const navigate = useNavigate();

    const handleProjectDetails = id =>{
        navigate(`/project${id}`)
    }
    return (
        <div>
             <div className='flex justify-center'>
            <div data-aos="zoom-in">
                <div class="card w-96 prj text-primary border shadow-xl">
  <figure class="px-10 pt-10">
    <img className='opacity-50' src={img[0]} alt="" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title font-bold text-3xl">{name}</h2>
    <p>{type}</p>
    <div class="card-actions">
    <button onClick={()=>handleProjectDetails(id)} className='border rounded-xl font-semibold p-2 bttn foot uppercase '>Explore more</button>
    </div>
  </div>
</div>
            </div>
            </div>
        </div>
    );
};

export default ProjectOne;