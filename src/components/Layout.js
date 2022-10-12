import { Outlet } from 'react-router-dom';
import { LoginContext } from '../App';
import { useContext } from 'react';

import Header from './Header';
import Login from './Login';
const Layout = () => {
    const { loginMount, setLoginMount } = useContext(LoginContext);

    return (
        <div className="main">
            <div className="wp-header">
                <Header />
            </div>
            <div className="container">
                {loginMount && <Login />}
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
