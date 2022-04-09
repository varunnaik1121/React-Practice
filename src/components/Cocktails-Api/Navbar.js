
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <>
    <nav className='nav'>
      
        <div className='nav-links'>
        <h2 className='nav-logo'>Navbar</h2>
            <Link to="/">
               <li>home</li>
            </Link>
            <Link to='/about'>
                <li>
                    about
                </li>
            </Link>
        </div>
    </nav>
    </>
}

export default Navbar;
