import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleTools from './SingleTools';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Tools = () => {
    const navigate = useNavigate()
    const [tools, setTools] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])

    return (
        <section id='tools'>
            <h2 className='text-4xl text-center mt-8 mb-5 font-bold'>Our <span className='text-primary'>Tools</span></h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {tools.slice(0,6).map(tool => <SingleTools tool={tool} key={tool._id} />)}
            </div>
            <div className='flex justify-center mt-5'>
            <button onClick={() => navigate('/allTools')} className='btn btn-secondary'>Explore More <FontAwesomeIcon className="text-xl ml-2" icon={faArrowRight} /></button>
            </div>
        </section>
    );
};

export default Tools;