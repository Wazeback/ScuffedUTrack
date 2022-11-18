import React, {useState} from 'react';
import {ProjectData} from './ProjectData'


export default function Project() {

    const [selected, setSelected] = useState(null)

    const toggleProject = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

        return (
            <>
                <div className='bg-[#4b4e69] h-2/3 w-full flex justify-center'>
                    <div className=' w-3/4 h-2/3 flex flex-col items-center'>
                        {ProjectData.map((project, i) => {
                            return (
                                <>
                                    <button className='w-full h-10 flex justify-center items-center text-[#d5d8df]' onClick={() => toggleProject(i)}>
                                        <span>{selected === i ? '-' : '+'}</span>
                                        <h2 className='h-full ml-2 text-2xl' >{project.title}</h2>
                                    </button>
                                        <div className={selected === i ? 'dropdownAnimate active h-2/5 w-3/5 rounded-lg ' : 'dropdownAnimate h-2/5 w-3/5 rounded-lg'}>
                                            <div className='w-full h-full border-[1px] border-amber-50 rounded-lg'>
                                                <ul className='ml-2 text-[#d5d8df] border-grey-600'>
                                                    <li>{project.sprints}</li>
                                                </ul>
                                            </div>
                                        </div>

                                </>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

