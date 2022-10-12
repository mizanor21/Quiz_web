import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const quiz = useLoaderData();
    const { id, name, questions } = quiz.data;
    return (
        <div className='m-5'>
            <h2 className='text-2xl font-bold text-center bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 text-lg shadow-2xl p-5 w-80 rounded-tl-3xl rounded-br-3xl  mx-auto'>Quiz of <span className='text-green-600 text-3xl '>{name}</span></h2>

            <div className="questions">
                {
                    questions.map(quizQuestion => <QuizQuestion key={quizQuestion.id} quizQuestion={quizQuestion}></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default Quiz;