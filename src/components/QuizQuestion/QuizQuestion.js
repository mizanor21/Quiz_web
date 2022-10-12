import React from 'react';
import Option from '../Option/Option';

const QuizQuestion = ({ quizQuestion }) => {
    const { id, question, options, correctAnswer } = quizQuestion;
    // console.log(correctAnswer)

    return (
        <div>
            <div className="bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 text-lg shadow-2xl container mx-auto m-4 p-4 rounded-lg lg:w-1/2">
                <h2 className='pb-3 text-xl font-bold'>Q{ }. {question}</h2>
                <div className="option-container  grid md:grid-cols-2 gap-3 ">
                    {
                        options.map(option => <Option key={option?.id} option={option} id={id} correctAnswer={correctAnswer}></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default QuizQuestion;