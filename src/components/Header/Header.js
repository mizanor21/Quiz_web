import React from 'react';
import './Header.css';
import banner2 from '../../assets/img/banner2.png'


const Header = () => {
    return (
        <div>
            <div className="container bg-slate-100 mx-auto rounded-box mt-5 justify-center items-center md:flex">

                <div className="text-4xl font-extrabold m-4 ">
                    <h1 className='text-yellow-400'>Don't think, <span className='italic hover:not-italic text-green-700'><br />just do it...</span></h1>
                </div>
                <div className="">
                    <img src={banner2} alt="Burger" />
                </div>

            </div>
        </div>
    );
};

export default Header;