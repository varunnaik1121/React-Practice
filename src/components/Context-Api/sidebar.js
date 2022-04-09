import React from 'react'
import { useCallback,useContext } from 'react'


import { useGlobal } from './Context'



const Sidebar = () => {
    const data = useGlobal();
    return (
        <div>
            {data}
        </div>
    )
}

export default Sidebar;
