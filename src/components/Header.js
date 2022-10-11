import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className='wp-logo'>
                <h1>LOGO</h1>
            </div>
            <ul className='menu'>
                <Link to='/'>
                    <li className='menu-item'>Menu Item</li>
                </Link>
                <Link to='/'>
                    <li className='menu-item'>Menu Item</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header