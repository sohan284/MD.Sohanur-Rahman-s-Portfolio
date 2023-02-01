import React, { useEffect, useState } from 'react';

const useProject = () => {
    const [project,setProject] = useState([]);
    useEffect( () =>{
        fetch('projects.json')
        .then(res=>res.json())
        .then(data=>setProject(data))
    },[]);
    return [project,setProject]
};
export default useProject;