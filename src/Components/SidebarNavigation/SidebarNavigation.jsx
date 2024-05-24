import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiBox3Fill } from "react-icons/ri";
import { ImCompass2 } from "react-icons/im";
import { LuBrain } from "react-icons/lu";
import { FaRegFileArchive } from "react-icons/fa";
import { GiRead } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { GrGrow } from "react-icons/gr";
import { SiCodementor } from "react-icons/si";
import { PiGitlabLogoSimple } from "react-icons/pi";
import { TbBuildingCommunity } from "react-icons/tb";
import Instagram from '../../icons/Instagram';
import Youtube from '../../icons/Youtube';
import LinkedIn from '../../icons/LinkedIn';
import Github from '../../icons/Github';
import Whatsapp from '../../icons/Whatsapp';

function SidebarNavigation() {

    const navStyleClass = "text-stone-500 font-semibold py-2 px-5 flex gap-3 items-center text-medium  border-l-2"
    const onActive = "text-violet-700 font-semibold py-2 px-5 flex gap-3 items-center text-medium  border-l-4 rounded-lg border-violet-700 ";
    return (
        <div className='flex flex-col w-1/8 min-w-30 h-screen overflow-hidden border-2 bg-white'>
            <NavLink
                to="/home"
                className={
                    ({isActive}) => isActive ? `${onActive}` :`${navStyleClass}`
                }
            >
                <RiBox3Fill/>
                Home
            </NavLink>
            <NavLink
                to="/explore"
                className={({isActive}) => isActive ?`${onActive}` :`${navStyleClass}`}
            >
                <ImCompass2/>
                Explore
            </NavLink>
            <NavLink
                to="/learn"
                className={({isActive}) => isActive ?`${onActive}` :`${navStyleClass}`}
            >
                <LuBrain/>
            Learn
            </NavLink>
            <NavLink
                to="/archieve"
                className={({isActive}) => isActive ?`${onActive}` :`${navStyleClass}`}
            >
                <FaRegFileArchive/>
            Archieve
            </NavLink>
            <NavLink
                to="/practice"
                className={({isActive}) => isActive ?`${onActive}` :`${navStyleClass}`}
            >
                <GiRead/>
            Practice
            </NavLink>
            <NavLink
                to="/projects"
                className={({isActive}) => isActive ?`${onActive}` :`${navStyleClass}`}
            >
                <GrProjects/>
            Projects
            </NavLink>
            <NavLink
                to="/career"
                className={({isActive}) => isActive ?`${onActive}` :`${navStyleClass}`}
            >
                <GrGrow/>
            Career
            </NavLink>
            <NavLink
                to="/mentorship"
                className={({isActive}) => isActive ?`${onActive}` :`${navStyleClass}`}
            >
                <SiCodementor size={20}/>
            Mentorship
            </NavLink>
            <NavLink
                to="/blogs"
                className={({isActive}) => isActive ?`${onActive}` :`${navStyleClass}`}
            >
                <PiGitlabLogoSimple/>
            Blogs
            </NavLink>
            <NavLink
                to="/community"
                className={({isActive}) => isActive ?`${onActive}` :`${navStyleClass}`}
            >
                <TbBuildingCommunity/>
            Community
            </NavLink>
            <div className='h-fit relative p-1'>
                <div className='h-16 w-16 rounded-full bg-violet-500 border-4 border-stone-300 absolute left-1/2 translate-x-[-50%]'></div>
                <div className='h-32 mt-4 bg-violet-500 rounded-lg mx-1'></div>
                <div className='p-2 bg-violet-200 mt-2 mx-1 flex items-center flex-col gap-2 rounded-lg'>
                    <span className='w-100 font-bold'>Connect with us</span>
                    <div className='flex'>
                        <Whatsapp/>
                        <Instagram/>
                        <Youtube/>
                        <LinkedIn/>
                        <Github/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SidebarNavigation
