import React from 'react';
import './Option.css';

const Option = ({ option, id, correctAnswer }) => {

    // console.log(option)
    return (
        <div className='option flex items-center p-4'>
            <h2><input type="radio" name={`radio-${id}`} className="radio radio-secondary mr-4" /></h2>
            <span>{option}</span>
        </div>
    );
};

export default Option;