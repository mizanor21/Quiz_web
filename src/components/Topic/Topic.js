import React from 'react';
import './Topic.css';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className="shadow-2xl rounded-xl topic">
            <img className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl md:container md:mx-auto' src={logo} alt="" />
            <div className="flex justify-between m-8">
                <h2 className='text-lg font-bold'>{name} <span className='bg-orange-400 text-white p-1 rounded-lg'>{total} Quiz</span></h2>
                <Link to={`/topic/${id}`} className="btn btn-sm btn-outline btn-secondary">Start Quiz <ArrowLongRightIcon className="h-6 w-6 text-secondary ml-2" /></Link>

            </div>
        </div>
    );
};

export default Topic;