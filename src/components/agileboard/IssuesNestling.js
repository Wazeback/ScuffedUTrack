import React from 'react';
import { IssuesNavbar } from './IssuesNavbar';
import { IssuesCreate } from './IssuesCreate';

export class IssuesNestling extends React.Component {

    render() {
        return (
            <div className={"pl-[50px] mt-2 mb-2"}>
                <IssuesNavbar/>
                <div className={"flex border border-gray-600 bg-[#30324E]"}>
                    <div className={"border-r border-gray-600 px-3 py-3"}>
                        <div className={"border border-gray-600 h-full w-[24px]"}>
                        </div>
                    </div>
                    <div className={"border-r border-gray-600 w-[35%] px-3 py-3"}>
                        <h4 className={""}>titel</h4>
                    </div>
                    <div className={"flex justify-center border-r border-gray-600 w-[18%] px-3 py-3"}>
                        <div className={"border border-gray-600 h-full w-[24px] rounded-full"}>
                        </div>
                    </div>
                    <div className={"border-r border-gray-600 w-[28%] px-3 py-3"}>
                        <h4 className={""}>status</h4>
                    </div>
                    <div className={"border-r border-gray-600 w-[28%] px-3 py-3"}>
                        <h4 className={""}>info</h4>
                    </div>
                    <div className={"border-gray-600 w-full px-3 py-3 lg:block hidden"}>
                    </div>
                </div>
                <div className={"flex border border-gray-600 bg-[#30324E]"}>
                    <div className={"border-r border-gray-600 px-3 py-3"}>
                        <div className={"border border-gray-600 h-full w-[24px]"}>
                        </div>
                    </div>
                    <div className={"border-r border-gray-600 w-[35%] px-3 py-3"}>
                        <h4 className={""}>titel</h4>
                    </div>
                    <div className={"flex justify-center border-r border-gray-600 w-[18%] px-3 py-3"}>
                        <div className={"border border-gray-600 h-full w-[24px] rounded-full"}>
                        </div>
                    </div>
                    <div className={"border-r border-gray-600 w-[28%] px-3 py-3"}>
                        <h4 className={""}>status</h4>
                    </div>
                    <div className={"border-r border-gray-600 w-[28%] px-3 py-3"}>
                        <h4 className={""}>info</h4>
                    </div>
                    <div className={"border-gray-600 w-full px-3 py-3 lg:block hidden"}>
                    </div>
                </div>
                <div className={"flex border border-gray-600 bg-[#30324E]"}>
                    <div className={"border-r border-gray-600 px-3 py-3"}>
                        <div className={"border border-gray-600 h-full w-[24px]"}>
                        </div>
                    </div>
                    <div className={"border-r border-gray-600 w-[35%] px-3 py-3"}>
                        <h4 className={""}>titel</h4>
                    </div>
                    <div className={"flex justify-center border-r border-gray-600 w-[18%] px-3 py-3"}>
                        <div className={"border border-gray-600 h-full w-[24px] rounded-full"}>
                        </div>
                    </div>
                    <div className={"border-r border-gray-600 w-[28%] px-3 py-3"}>
                        <h4 className={""}>status</h4>
                    </div>
                    <div className={"border-r border-gray-600 w-[28%] px-3 py-3"}>
                        <h4 className={""}>info</h4>
                    </div>
                    <div className={"border-gray-600 w-full px-3 py-3 lg:block hidden"}>
                    </div>
                </div>
                <IssuesCreate/>
            </div>
        )
    }
}