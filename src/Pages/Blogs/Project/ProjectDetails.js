import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProject from '../../Shared/Hooks/useProject';

const ProjectDetails = () => {
    const {projectId} = useParams();
    const [project,setProject] = useProject();

    return (
        <div>
           <h1 className='text-primary'>{projectId}</h1>
        </div>
    );
};

export default ProjectDetails;