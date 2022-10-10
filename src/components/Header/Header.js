import React from 'react';
import './Header.css';
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.png'


const Header = () => {
    return (
        <div>
            <div className="carousel container mx-auto rounded-box">
                <div className="carousel-item">
                    <img src={banner1} alt="Burger" />
                </div>

                <div className="carousel-item">
                    <img src={banner2} alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={banner3} alt="Burger" />
                </div>

            </div>
        </div>
    );
};

export default Header;