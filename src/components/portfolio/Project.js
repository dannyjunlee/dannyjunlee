import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const Project = () => {
    let { projectRoute } = useParams();

    useEffect(() => {
        // Fetch post route using projectRoute
    }, [projectRoute]);

    return (
        <div className='home'>
            <div className='container'>
                <h1 className='mt-5'>{projectRoute}</h1>
            </div>
        </div>
    )
}

export default Project;