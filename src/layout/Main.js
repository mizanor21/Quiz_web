import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Topics from '../components/Topics/Topics';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Header></Header> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;