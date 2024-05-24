import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import React from 'react'

function CircularProgressBar({completed,total,text}) {
    const value = completed/total;
    return (
        <CircularProgressbarWithChildren
        className='h-40'
        styles={{
            path: {
                // Trail color
                stroke: '#7C4DFE',
              },
            trail: {
                stroke:'rgb(221 214 254)'
            }
        }}
         value={value*100} > 
            <div className='flex flex-col items-center justify-center'>
                <span className='text-2xl font-bold'>{completed}</span><span className='text-sm font-semibold'>{text}</span>
            </div>    
        </CircularProgressbarWithChildren>
    )
}

export default CircularProgressBar
