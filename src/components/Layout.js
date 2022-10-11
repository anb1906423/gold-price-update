import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = ({ isAdmin }) => {
    return (
        <div className="main">
            <div className="wp-header">
                <Header isAdmin={isAdmin} />
            </div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
