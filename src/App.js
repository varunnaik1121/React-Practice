

import { data } from './components/data';
import { useState,useEffect } from 'react';
import Tour from './components/ToursApp/Tour';
import Setup from './components/Navbar-Sidebar-project/Setup';
import Home from './components/Context-Api/Home';
import Sidebar from './components/Context-Api/sidebar';









const App = ()=>{

 return <>
  
      <Home></Home>
      <Sidebar></Sidebar>
    

 </>
  
}

export default App;