import React from 'react';

export class IssuesCreate extends React.Component {

    render() {
        return (
            <div className={"flex border border-gray-600 w-full bg-[#30324E] rounded-b-lg"}>
                <div className={"w-full py-3 px-4"}>
                    <button>+ Voeg nieuwe issue toe </button>
                </div>
            </div>
        )
    }
}