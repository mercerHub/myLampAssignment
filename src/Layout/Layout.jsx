import React from 'react'
import Header from '../Components/Header'
import SidebarNavigation from '../Components/SidebarNavigation/SidebarNavigation'
import { Outlet } from 'react-router-dom'
import RightSidebar from '../Components/SidebarNavigation/RightSidebar'


function Layout() {
    return (
        <div className=' max-h-screen flex flex-col bg-violet-100'>
            <Header/>
            <div className='flex overflow-hidden justify-between w-screen'>
                <SidebarNavigation/>
                <Outlet/>
                <RightSidebar/>
            </div>
        </div>
    )
}

export default Layout
