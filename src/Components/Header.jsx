import React from 'react'
import { SiTheboringcompany } from "react-icons/si";
import { CiBellOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";


function Header() {
    return (
        <>
            <div  className='px-5 flex items-center justify-between border-b-2 bg-white'>
                <SiTheboringcompany className='text-7xl p-1'/>
                <div className='flex items-center justify-between gap-5'>
                    <button className='border-2 rounded-full text-3xl p-1 text-violet-700'> <CiBellOn/></button>
                    <button className='flex items-center gap-4 text-medium px-3 py-1 border-2 rounded-3xl '><span className='pl-2'>Account</span><IoPersonOutline className='border border-violet-700 rounded-full text-3xl p-1 text-violet-700'/></button>
                    <button className='flex items-center gap-4 text-medium px-3 py-1 border-2 rounded-3xl'><span className='pl-2'>Menu</span><CiMenuBurger
                    className='border border-violet-700 rounded-full text-3xl p-1 text-violet-700'/></button>
                </div>
            </div>
        </>
    )
}

export default Header
