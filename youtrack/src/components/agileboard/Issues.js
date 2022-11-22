import React from 'react';
import { IssuesHeader } from './IssuesHeader';
import { IssuesNavbar } from './IssuesNavbar';
import { IssuesCreate } from './IssuesCreate';
import { IssuesNestling } from './IssuesNestling';
import { IssuesData } from './IssuesData';

export default class Issues extends React.Component {

    render() {
        console.log(this.props);
        return (

            <div className='flex flex-col text-white lg:px-[150px] px-3 py-5 text-[#D5D8DF]'>

                <IssuesHeader/>

                <div className='flex flex-col'>

                    <IssuesNavbar/>

                    {IssuesData.map((Data, i) => {
                        return (
                            <>
                                <div className='flex border border-gray-600 bg-[#30324E]'>
                                    <div className='border-r border-gray-600 px-3 py-3'>
                                        <div className='border border-gray-600 h-full w-[24px]'/>
                                    </div>
                                    <div className='border-r border-gray-600 w-[35%] px-3 py-3'>
                                        <h4>{Data.title}</h4>
                                    </div>
                                    <div className='flex justify-center border-r border-gray-600 w-[18%] px-3 py-3'>
                                        <div className='border border-gray-600 h-full w-[24px] rounded-full'>
                                            <h4>{Data.user}</h4>
                                        </div>
                                    </div>
                                    <select className='border-r border-gray-600 w-[28%] px-3 py-3'>
                                        {Data.status.map((Status, i) => {
                                            return (
                                                <>
                                                    <option>{Status}</option>
                                                </>
                                            )
                                        })}
                                    </select>
                                    <select className='border-r border-gray-600 w-[28%] px-3 py-3'>
                                        {Data.subject.map((Subject, i) => {
                                            return (
                                                <>
                                                    <option value={Subject}>{Subject}</option>
                                                </>
                                            )
                                        })}
                                    </select>
                                    <div className='border-gray-600 w-full px-3 py-3 lg:block hidden'/>
                                </div>
                            </>
                        )
                    })}

                    {/*<IssuesNestling/>*/}

                    <IssuesCreate/>

                </div>
            </div>
        )
    }
}