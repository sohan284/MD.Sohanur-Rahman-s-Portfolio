import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectOne = ({project}) => {
    const {name,img,type,id} = project;
    const navigate = useNavigate();

    const handleProjectDetails = id =>{
        navigate(`/projDetails/${id}`)
    }
    return (
        <div>
             <div className='flex justify-center'>
            <div data-aos="zoom-in">
                
                <div >
                    <div class="card h-96 w-72 shadow-xl project image-full">
                        <figure><img height={200} className="opacity-40"  src={img[0]} alt="" /></figure>
                        <div class="card-body">
                            <h1 className='text-center text-accent'>{type}</h1>
                            <h1 className='text-3xl my-16 text-primary font-semibold text-center'>{name}</h1>
                            <div class="card-actions justify-center">
                                <button onClick={()=>handleProjectDetails(id)} className='border rounded-xl font-semibold p-2 bttn bg-transparent '>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default ProjectOne;