import React from 'react';
import './Navbar.css';
import logo from '../../assets/img/Quiz-Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-gray-200 shadow-xl">
            <div className="container mx-auto navbar">
                <div className="flex-1 logo">
                    <Link to={'/'} className="btn btn-ghost btn-outline normal-case text-xl"> <img className='h-24' src={logo} alt="" /> Quiz Time</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 text-xl font-bold">
                        <li className='navItems rounded-lg'><Link to={'/'}>Topics</Link></li>
                        <li className='navItems rounded-lg'><Link to={'/statistics'}>Statistics</Link></li>
                        <li className='navItems rounded-lg'><Link to={'/blog'}>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;