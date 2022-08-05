import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleTools from './SingleTools';

const Tools = () => {
    const [tools, setTools] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])

    return (
        <section>
            <h2 className='text-4xl text-center mt-8 mb-5 font-bold'>Our <span className='text-primary'>Tools</span></h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {tools.map(tool => <SingleTools tool={tool} key={tool._id} />)}
            </div>
        </section>
    );
};

export default Tools;