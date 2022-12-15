import React from "react";
import {FilterPeople} from "./FilterPeople";
import {FilterSprint} from "./FilterSprint"
import DashHeader from "./DashHeader"
import axios from "axios";
import SprintBurndown from "./SprintBurndown";


export class Dashboard extends React.Component{
    render() {
        return (
            <>
                <div className={"h-[100vh] truncate text-[#d5d8df] bg-[#181e34]  w-full flex"}><div className={"h-[100%] w-[75%] flex flex-col"}>
                    <div className={"h-[10%] m-1 bg-[#4b4e69] rounded-sm w-[100%] flex justify-between items-center"}>
                        <DashHeader/>
                    </div>
                    <div className={"h-[10%] m-1  bg-[#4b4e69] rounded-sm border-purple-700 border-double w-[100%]"}>
                        <h1 className={"m-1"}>Het dashboard van SD21-02 </h1>
                    </div>
                    <div className={"h-[80%] m-1  bg-[#181e34] rounded-sm text-black w-[100%] flex items-center bg-[#181e34] place-content-center"}>
                        <SprintBurndown/>
                    </div>
                </div><div className={"h-[100%] w-[25%] rounded-sm items-center place-content-center flex flex-col"}>
                    <div className={"h-[50%] m-1 w-[80%] bg-[#4b4e69] rounded-sm flex items-center flex-col place-content-center"}>
                        <FilterPeople/>
                    </div>
                    <div className={"h-[50%] w-[100%] flex items-center place-content-center"}>
                        <div className={"h-[90%] m-1 w-[80%] bg-[#4b4e69] rounded-sm flex flex-col place-content-center items-center"}>
                            <FilterSprint/>
                        </div>
                    </div>
                </div></div>
            </>
        )

    }
}