import React from "react";
import MyResponsiveLine from "./Graph";
import FilterPeople from "./FilterPeople";
import FilterSprint from "./FilterSprint"
import DashHeader from "./DashHeader"
import {barData} from "./chartData";


export class Dashboard extends React.Component{

    render() {
        return (
            <div className={"h-[100vh] truncate text-[#d5d8df] bg-[#181e34] w-full flex"}>
                <div className={"h-[100%] w-[75%] flex flex-col"}>
                    <div className={"h-[10%] m-1 bg-[#4b4e69] w-[100%] flex justify-between items-center"}>
                        <DashHeader/>
                    </div>
                    <div className={"h-[10%] m-1  bg-[#4b4e69] border-purple-700 border-double w-[100%]"}>
                        <h1 className={"m-1"}>Het dashboard van SD21-02 </h1>
                    </div>
                    <div className={"h-[80%] m-1  bg-[#181e34] text-black w-[100%] flex items-center bg-[#181e34] place-content-center"}>
                        <MyResponsiveLine data={barData}/>
                    </div>
                </div>
                <div className={"h-[100%] w-[25%] flex flex-col"}>
                    <div className={"h-[50%] w-[100%] flex items-center  place-content-center"}>
                        <FilterPeople/>
                    </div>
                    <div className={"h-[50%] w-[100%] flex items-center place-content-center"}>
                        <div className={"h-[90%] m-1 w-[80%] bg-[#4b4e69] flex flex-col place-content-center items-center"}>
                            <FilterSprint/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}