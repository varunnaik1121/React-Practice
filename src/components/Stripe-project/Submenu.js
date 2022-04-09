import React from 'react'
import { useGlobal } from './Context'
import { useEffect,useState,useRef } from 'react'

const Submenu = () => {
    const {isSubmenuOpen,location,page:{page,links},} = useGlobal()
    const container = useRef(null);
    useEffect(()=>{
            const submenu = container.current;
            const {center,bottom} = location;
            submenu.style.left=`${center}px`
            submenu.style.top=`${bottom}px`
    },[location])
    return (
        <aside className={ `${isSubmenuOpen ? 'submenu show':'submenu'}` } ref={container}>
            <h4>{page}</h4>
            <div className='submenu-center col-2'>
                {links.map((item,index)=>{
                    const {label,icon,url} = item;
                    return <a href={url}>{icon}{label}</a>
                })}
            </div>
        </aside>
    )
}

export default Submenu;
