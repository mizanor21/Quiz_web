import React from 'react';

const Blog = () => {
    return (
        <div className='m-14 container mx-auto bg-slate-100 p-5'>
            <h1 className='text-center text-4xl p-5'>frequently asked questions</h1>
            <div className="">
                <h2 className='text-xl font-bold'>What of purpose of react-router?</h2>
                <p className='border-l-8 m-4 text-lg text-gray-500'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className="">
                <h2 className='text-xl font-bold'>Why is the context API useful?</h2>
                <p className='border-l-8 m-4 text-lg text-gray-500'>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className="">
                <h2 className='text-xl font-bold'>How does useRef React work?</h2>
                <p className='border-l-8 m-4 text-lg text-gray-500'>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
            </div>
        </div>
    );
};

export default Blog;