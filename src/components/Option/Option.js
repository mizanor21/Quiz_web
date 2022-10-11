import React from 'react';
import './Option.css';

const Option = ({ option }) => {
    console.log(option)
    return (
        <div className='option flex items-center p-4'>
            <h2><input type="radio" name="radio-1" className="radio radio-secondary mr-4" checked /></h2>
            <span>{option}</span>
        </div>
    );
};

export default Option;