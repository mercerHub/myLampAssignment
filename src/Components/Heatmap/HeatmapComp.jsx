import React, { useState, useEffect } from 'react';

function HeatmapComp() {
    const dayCount = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const date = new Date();
    const [duration,setDuration] = useState(3);
    const [currentMonth, setCurrentMonth] = useState(date.getMonth());
    const [startMonth, setStartMonth] = useState(currentMonth - duration);
    const [heatMapDiv, setHeatMapDiv] = useState([]);
    
    const handleChange = (e) => setDuration(e.target.value);
    useEffect(() => {
        setStartMonth((currentMonth - duration + 12) % 12);
    }, [duration, currentMonth]);

    useEffect(() => {
        const tempHeatMapDiv = [];
        for (let mon = startMonth + 1; (mon % 12) != currentMonth; mon++) {
            const temp = [];
            for (let days = 0; days < dayCount[mon % 12]; days++) {
                temp.push(
                    <div key={`${mon}-${days}`} className='h-4 w-4 border rounded bg-slate-300'></div>
                );
            }
            tempHeatMapDiv.push(
                <div key={`${mon}`} className='flex flex-col flex-wrap'>
                    {temp}
                </div>
            );
        }
        setHeatMapDiv(tempHeatMapDiv);
    }, [startMonth, currentMonth,duration]);

    return (
        <div>
            <div className='flex gap-2 text-black font-bold decoration-neutral-400 duration-75 px-4 py-2 text-lg'>
                <label htmlFor="duration">Set duration</label>
                <select name='duration' id='duration' onChange={handleChange}>
                    <option selected value="3">3</option>
                    <option selected value="4">4</option>
                    <option selected value="5">5</option>
                    <option selected value="6">6</option>
                </select>

            </div>
            <div className='flex h-40 gap-2 p-2'>
                {heatMapDiv}
            </div>
        </div>
    );
}

export default HeatmapComp;
