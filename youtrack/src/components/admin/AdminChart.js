import React from 'react';
import { AdminChartBurndown } from './AdminChartBurndown';
import AdminCreateProject from './AdminCreateProject';

export class AdminChart extends React.Component {

    render() {
        return (
            <div className={"flex flex-col py-3 md:px-10 px-3 bg-[#4b4e69] xl:h-full rounded-sm"}>
                <div className={"flex flex-row px-3 pb-3 "}>
                    <select className={"border border-color outline-none px-2 py-2 md:mr-4 mr-1 bg-light"}>
                        <option>Project 1</option>
                        <option>Project 2</option>
                        <option>Project 3</option>
                        <option>Project 4</option>
                    </select>
                    <AdminCreateProject/>
                </div>

                <AdminChartBurndown/>

            </div>
        )
    }
}