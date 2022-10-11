import { Outlet } from "react-router-dom"
import Header from './Header'

const Layout = () => {
    return (
        <div className="main">
            <div className="wp-header">
                <Header />
            </div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout