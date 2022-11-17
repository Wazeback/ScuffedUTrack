import React from 'react';

export class AdminChart extends React.Component {

    render() {
        return (
            <div className={"flex flex-col py-3 md:px-10 px-3 bg-[#4b4e69] rounded-sm"}>
                <div className={"flex flex-row  justify-around px-3 pb-3"}>
                    <button className={"border-2 border-[#d5d8df] text-[#d5d8df] px-6 py-3 text-xl"}>create project</button>
                    <button className={"border-2 border-[#d5d8df] text-[#d5d8df] px-6 py-3 text-xl"}>edit project</button>
                    <button className={"border-2 border-[#d5d8df] text-[#d5d8df] px-6 py-3 text-xl"}>remove project</button>
                </div>
                <div className={"border-2 md:h-[485px] h-[300px] w-full"}>

                </div>
            </div>
        )
    }
}