import React from 'react';
import axios from 'axios';
import { IssuesHeader } from './IssuesHeader';
import { IssuesNavbar } from './IssuesNavbar';
import { IssuesCreate } from './IssuesCreate';
import { IssuesNestling } from './IssuesNestling';

export default class Issues extends React.Component {

    state = {
        sprintData: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/sprint`)
            .then(res => {
                const sprintData = res.data;
                this.setState({ sprintData });
            })
    }

    render() {
        // console.log(this.state.sprint);
        return (

            <div className='flex flex-col text-white lg:px-[150px] px-3 py-5 text-[#D5D8DF]'>
                <IssuesHeader/>
                <div className='flex flex-col'>
                    <IssuesNavbar/>
                    {this.state.sprintData.sprint ? this.state.sprintData.sprint.map((Data, i) => {
                            return (
                                <>
                                {Data.issues.map((issue, i) => {
                                    console.log(issue);
                                    return(
                                    <div className='flex border border-gray-600 bg-[#30324E]'>
                                        <div className='border-r border-gray-600 px-3 py-3'>
                                            <div className='border border-gray-600 h-full w-[24px]'/>
                                        </div>
                                        <div className='border-r border-gray-600 w-[35%] px-3 py-3'>
                                            <h4>{issue.title}</h4>
                                        </div>
                                        <div className='flex justify-center border-r border-gray-600 w-[18%] px-3 py-3'>
                                            <div className='border border-gray-600 h-full w-[24px] rounded-full'>
                                                <h4>{issue.user_id}</h4>
                                            </div>
                                        </div>
                                        <div className='flex justify-center border-r border-gray-600 w-[28%] px-3 py-3'>
                                            <h4>{issue.status.status}</h4>
                                        </div>
                                        <div className='flex justify-center border-r border-gray-600 w-[28%] px-3 py-3'>
                                            <h4>{issue.subject.subject}</h4>
                                        </div>
                                        <div className='border-gray-600 w-full px-3 py-3 lg:block hidden'/>
                                    </div>
                                    )
                                })}
                                </>
                            )
                    }): null}
                    <IssuesCreate/>
                </div>
            </div>
        )
    }
}