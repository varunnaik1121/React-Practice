import React,{useState,useContext} from 'react'
import sublinks from './data';

 const AppContext = React.createContext();
  const AppProvider = ({children})=>{

    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(false);
    const [location,setLocation] = useState({})
    const [page,setPage] = useState({page:'',links:[]})

    console.log(page)

    const openSidebar = ()=>{
        return setIsSidebarOpen(true)
    }
    const closeSidebar = ()=>{
        return setIsSidebarOpen(false)
    }
    const openSubmenu = (text,coordinates)=>{
        const page = sublinks.find((link)=>link.page==text)
        setPage(page)
        setLocation(coordinates)
        return setIsSubmenuOpen(true)
    }
    const closeSubmenu = ()=>{
        return setIsSubmenuOpen(false)
    }
    return <AppContext.Provider value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page,

    }}>
        {children}
    </AppContext.Provider>

}



export const useGlobal = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider};
