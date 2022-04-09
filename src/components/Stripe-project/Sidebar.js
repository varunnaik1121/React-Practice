import React from 'react'
import sublinks from './data'
import { useGlobal } from './Context'
import { FaTimes } from 'react-icons/fa'
import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

const Sidebar = () => {
    const {isSidebarOpen,closeSidebar} = useGlobal()
    return <>
       <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
           <div className='sidebar'>
               <button className='close-btn' onClick={closeSidebar}>
                   <FaTimes></FaTimes>
               </button>
               <div className='sidebar-links'>
                    {sublinks.map((item,index)=>{
                        const {links,page} = item;
                        return <article key={index}>
                            <h4>{page}</h4>
                            <div className='sidebar-sublinks'>
                                {links.map((link,index)=>{
                                    const {url,label,icon}=link;
                                    return <a href={url}>
                                        {icon}{label}
                                    </a>
                                })}
                            </div>
                        </article>
                    })}
               </div>
           </div>
       </aside>

    </>
}

export default Sidebar
