

import React from 'react'
import { list } from './Links'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useRef,useState,useEffect } from 'react';

const Setup = () => {
    const [show,setShow] = useState(false)
  
    return <>
        <Navbar show={show} setShow={setShow}></Navbar>
        <Sidebar show={show} ></Sidebar>
    </>
    
}

export default Setup;
