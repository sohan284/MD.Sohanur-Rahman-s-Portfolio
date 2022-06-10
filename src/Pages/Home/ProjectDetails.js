import React, { useState } from 'react';
import useProject from '../Shared/Hooks/useProject';
import AllProject from './AllProject';

const ProjectDetails = () => {
    const [project,setProject] = useProject()
    const [details,setDetails] = useState();

    return (
        <div>
            {
                project.map(proj=><AllProject project={proj}></AllProject>)
            }
        </div>
    );
};

export default ProjectDetails;