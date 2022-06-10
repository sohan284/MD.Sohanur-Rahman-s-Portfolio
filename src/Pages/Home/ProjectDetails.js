import React, { useState } from 'react';
import useProject from '../Shared/Hooks/useProject';
import AllProject from './AllProject';

const ProjectDetails = () => {
    const [project,setProject] = useProject()
    const [details,setDetails] = useState();

    return (
        <div>
            <h1>{project.length}</h1>
            {
                project.map(proj=><AllProject project={proj}></AllProject>)
            }
        </div>
    );
};

export default ProjectDetails;