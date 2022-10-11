import React from 'react';

const QuizQuestion = ({ quizQuestion }) => {
    console.log(quizQuestion);
    const { id, question, options, correctAnswer } = quizQuestion;
    return (
        <div>
            <h2>Quiz {id}: {question}</h2>
        </div>
    );
};

export default QuizQuestion;