import React from 'react';
import {ProjectData} from "./ProjectData";
// TODO: comments schrijven
export default class AdminProjectMenu extends React.Component {



    render() {
        return (
            <>
                <form method='POST' className='absolute max-w-[520px] flex flex-row bg-light rounded-md'>
                    <div className='flex flex-col px-2 py-2.5'>
                        <input type='text' placeholder='Titel' className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>
                        <h4>start date</h4><input type='date' className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>
                        <h4>end date</h4><input type='date' className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>

                        {ProjectData.map((Create, i) => {
                            return (
                                <>
                                    <div className='group'>
                                        <div className='flex items-center py-2 px-2.5 text-sm text-color'>
                                            <span className='w-3/5'>{Create.title}</span>
                                            {Create.values.length > 1 ? (
                                                <select className='rounded-md border border-color px-1 py-1 text-color bg-[#4b4e69] outline-none '>
                                                    {Create.values.map((option, i) => {
                                                        return (
                                                            <option value={option}>{option}</option>
                                                        )
                                                    })}
                                                </select>
                                                ) :
                                                Create.values.map((option, i) => {
                                                    return (
                                                        <span className='w-2/5'>{option}</span>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                    <input className={'border border-color rounded-md px-2 py-2'} type={'submit'} value={'submit'}/>
                                </>
                            )
                        })}

                    </div>
                </form>
            </>
        )
    }
}