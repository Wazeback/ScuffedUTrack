import React from 'react';

export default class AdminGroupsEdit extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"h-full w-full border-2 border-color bg-light rounded-sm"}>
                <div className={"flex flex-col px-3 py-3"}>
                    <h1 className={"text-3xl"}>group {this.props.id}</h1>

                    <div className={"mt-2 flex flex-col border border-color bg-[#4b4e69]"}>
                        <div className={"flex flex-row text-center"}>
                            <div className={"w-full lg:px-8 border-r border-color md:px-4 px-7 py-2"}>
                                <h1 className={""}>naam</h1>
                            </div>
                            <button className={"w-full lg:px-8 border-r border-color md:px-4 px-7 py-2"}>edit</button>
                            <button className={"w-full lg:px-8 md:px-4 px-7 py-2"}>remove</button>
                        </div>
                    </div>
                    <div className={"mt-2 flex flex-col border border-color bg-[#4b4e69]"}>
                        <div className={"flex flex-row text-center"}>
                            <div className={"w-full lg:px-8 border-r border-color md:px-4 px-7 py-2"}>
                                <h1 className={""}>naam</h1>
                            </div>
                            <button className={"w-full lg:px-8 border-r border-color md:px-4 px-7 py-2"}>edit</button>
                            <button className={"w-full lg:px-8 md:px-4 px-7 py-2"}>remove</button>
                        </div>
                    </div>
                    <div className={"mt-2 flex flex-col border border-color bg-[#4b4e69]"}>
                        <div className={"flex flex-row text-center"}>
                            <div className={"w-full lg:px-8 border-r border-color md:px-4 px-7 py-2"}>
                                <h1 className={""}>naam</h1>
                            </div>
                            <button className={"w-full lg:px-8 border-r border-color md:px-4 px-7 py-2"}>edit</button>
                            <button className={"w-full lg:px-8 md:px-4 px-7 py-2"}>remove</button>
                        </div>
                    </div>
                    <div className={"mt-2 flex flex-col border border-color bg-[#4b4e69]"}>
                        <div className={"flex flex-row text-center"}>
                            <div className={"w-full lg:px-8 border-r border-color md:px-4 px-7 py-2"}>
                                <h1 className={""}>naam</h1>
                            </div>
                            <button className={"w-full lg:px-8 border-r border-color md:px-4 px-7 py-2"}>edit</button>
                            <button className={"w-full lg:px-8 md:px-4 px-7 py-2"}>remove</button>
                        </div>
                    </div>
                    <div className={"mt-2 flex flex-col border border-color bg-[#4b4e69]"}>
                        <div className={"flex flex-row text-center"}>
                            <div className={"w-full lg:px-8 border-r border-color md:px-4 px-7 py-2"}>
                                <h1 className={""}>naam</h1>
                            </div>
                            <button className={"w-full lg:px-8 border-r border-color md:px-4 px-7 py-2"}>edit</button>
                            <button className={"w-full lg:px-8 md:px-4 px-7 py-2"}>remove</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}