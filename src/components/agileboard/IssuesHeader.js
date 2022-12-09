import React from 'react';
import Create from '../issues/Create'

export class IssuesHeader extends React.Component {

    render() {
        return (
            <div className={"flex justify-between flex-row"}>
                <h1 className={"text-3xl "}>Sprint 1</h1>
                <div className={"px-3 py-3"}>
                    {/*<button className={"border-2 px-2 py-2 "}>issues</button>*/}
                    <Create/>
                </div>
                <div className={"flex flex-"}>
                    <div className={"px-3 py-3"}>
                        <button className={"border-2 px-2 py-2"}>burndown</button>
                    </div>
                </div>
            </div>
        )
    }
}
