import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = ({ isAdmin }) => {
    return (
        <div className="header">
            <div className="wp-logo">
                <img src={require('../asset/images/Logo1.jpg')} className="logo" />
            </div>
            <ul className="menu">
                <NavLink to="/home">
                    <li className="menu-item">Trang chủ</li>
                </NavLink>
                {isAdmin && (
                    <NavLink to="/updateprice">
                        <li className="menu-item">Cập nhật giá</li>
                    </NavLink>
                )}
            </ul>
        </div>
    );
};

export default Header;
