import React from 'react';

export class IssuesNavbar extends React.Component {

    render() {
        return (
            <div className={"flex border border-gray-600 bg-[#30324E] rounded-t-lg"}>
                <div className={"border-r border-gray-600 w-[24px]"}/>
                <div className={"border-r border-gray-600 w-[35%] py-3 px-3"}>
                    <h1>titel</h1>
                </div>
                <div className={"border-r flex justify-center border-gray-600 w-[18%] py-3 px-3"}>
                    <h1>gebruiker</h1>
                </div>
                <div className={"border-r flex justify-center border-gray-600 w-[28%] py-3 px-3"}>
                    <h1>status</h1>
                </div>
                <div className={"border-r flex justify-center border-gray-600 w-[28%] py-3 px-3"}>
                    <h1>Subject</h1>
                </div>
                <div className={"border-gray-600 flex justify-center w-full py-3 px-3 lg:block hidden"}>
                    <h4> + </h4>
                </div>
            </div>
        )
    }
}
