import React from 'react';
import axios from 'axios';
import { IssuesHeader } from './IssuesHeader';
import { IssuesNavbar } from './IssuesNavbar';
import { IssuesCreate } from './IssuesCreate';
import { IssuesNestling } from './IssuesNestling';
import { IssuesData } from './IssuesData';

export default class Issues extends React.Component {

    state = {
        issues: []
    }

    componentDidMount() {
        axios.get(`http://scuffedutrackbackend.test/api/issues`)
            .then(res => {
                const issues = res.data;
                this.setState({ issues });
            })
    }

    render() {
        console.log(this.state.issues);
        return (

            <div className='flex flex-col text-white lg:px-[150px] px-3 py-5 text-[#D5D8DF]'>

                <IssuesHeader/>

                <div className='flex flex-col'>

                    <IssuesNavbar/>

                    {this.state.issues.issues ? this.state.issues.issues.map((Data, i) => {
                        console.log(Data)
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
                                            <h4>{Data.id}</h4>
                                        </div>
                                    </div>
                                    <select className='border-r border-gray-600 w-[28%] px-3 py-3'>
                                        {/*{Data.description.map((Status, i) => {*/}
                                        {/*    return (*/}
                                        {/*        <>*/}
                                        {/*            <option>{Status}</option>*/}
                                        {/*        </>*/}
                                        {/*    )*/}
                                        {/*})}*/}\
                                        <h4>{Data.description}</h4>
                                    </select>
                                    <select className='border-r border-gray-600 w-[28%] px-3 py-3'>
                                        {/*{Data.id.map((Subject, i) => {*/}
                                        {/*    return (*/}
                                        {/*        <>*/}
                                        {/*            <option value={Subject}>{Subject}</option>*/}
                                        {/*        </>*/}
                                        {/*    )*/}
                                        {/*})}*/}
                                    </select>
                                    <div className='border-gray-600 w-full px-3 py-3 lg:block hidden'/>
                                </div>                            </>
                        )
                    }): null}

                    {/*<IssuesNestling/>*/}

                    <IssuesCreate/>

                </div>
            </div>
        )
    }
}