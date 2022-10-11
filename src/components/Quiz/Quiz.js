import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const quiz = useLoaderData();
    const { id, name, questions } = quiz.data;
    return (
        <div>
            <h2 className='text-xl font-bold'>Quiz of {name}</h2>
            <div className="questions">
                {
                    questions.map(quizQuestion => <QuizQuestion key={quizQuestion.id} quizQuestion={quizQuestion}></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default Quiz;