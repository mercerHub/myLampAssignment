import React from 'react'
import { Heatmap } from "contribution-heatmap"
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar'
import HeatmapComp from '../Heatmap/HeatmapComp'

function RightSidebar() {
    return (
        <div className='w-4/12 flex flex-col p-4 gap-4 h-screen'>
            <div className=' border-2 rounded-xl flex-col bg-white'>
                <div className='flex gap-10 items-center justify-center p-5'>
                    <CircularProgressBar completed={6} total = {15} text = {"Assignments"}
                    />
                    <CircularProgressBar completed={27} total = {100} text = {"Questions Solved"}/>
                </div>
                <div className='border-2 mx-4 my-1 rounded-full'></div>
                
                <div className='flex justify-around text-stone-900 font-bold h-28 py-4'>
                    <div className='w-full pl-5'>Badges</div>
                    <div className='border-l-2 w-full pl-5'>Focused Area</div>
                </div>

            </div>
            <div className='border-2 rounded-xl flex-col gap-2 py-2 px-4 bg-white'>
                <HeatmapComp/>
            </div>
        </div>
    )
}

export default RightSidebar
