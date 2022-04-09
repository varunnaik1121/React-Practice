

import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = ({show,setShow}) => {
    return (
        <div className='navbar-container'>
        <nav className='nav'>
            <div className='title'>Varun naik</div>
            <button className='toggle' onClick={()=>{setShow(!show)}}>
                <GiHamburgerMenu></GiHamburgerMenu>
            </button>

        </nav>
    </div>
    )
}

export default Navbar;
