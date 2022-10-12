import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../App';

const Header = () => {
    const { login, setLogin } = useContext(LoginContext);

    const { setLoginMount } = useContext(LoginContext);

    return (
        <div className="header">
            <div className="wp-logo">
                <img src={require('../asset/images/Logo1.jpg')} className="logo" />
            </div>
            <ul className="menu">
                <NavLink to="/home">
                    <li className="menu-item">Trang chủ</li>
                </NavLink>
                {login && (
                    <NavLink to="/updateprice">
                        <li className="menu-item">Cập nhật giá</li>
                    </NavLink>
                )}
            </ul>
            <div className="login">
                {!login && (
                    <button
                        onClick={() => {
                            setLoginMount(true);
                        }}
                    >
                        Đăng Nhập
                    </button>
                )}

                {login && (
                    <button
                        onClick={() => {
                            setLogin(false);
                        }}
                    >
                        Đăng xuất
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
