import React from 'react';
import { AdminHeader } from './AdminHeader';
import { AdminGroups } from './AdminGroups';
import { AdminChart } from './AdminChart';

export class AdminDashboard extends React.Component {
    render() {
        return (
            <div className="flex justify-between lg:flex-row flex-col  bg-[#181e34]  h-full px-5 py-5">
                <div className={"flex flex-col lg:w-[59%] w-full lg:mb-0 mb-5"}>
                    <AdminHeader/>
                    <AdminChart/>
                </div>
                <AdminGroups/>
            </div>
        )
    }
}