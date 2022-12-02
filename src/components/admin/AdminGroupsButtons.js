import React, { useState } from 'react';
import AdminGroupsEdit  from './AdminGroupsEdit';


export default class AdminGroupsButtons extends React.Component {
    render() {
        const groups = [1, 2, 3, 4, 5, 6, 7, 8];
        return (
            <div className={"grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2"}>
                {groups.map((groups) => {
                    return (
                        <>
                            <div className={"py-1 px-1"}>
                                <div className={"flex flex-col border border-color bg-light w-full h-full py-1 px-2 text-sm"}>
                                    <h4 className={"text-base"}>sd21-{groups}</h4>
                                    <div>
                                        <button value={groups}>edit</button>
                                        {/*{active === groups && <button value={groups}>edit</button>}*/}
                                        {/*{this.state.groups ? <AdminGroupsEdit changeHandler={this.toggleGroups.bind(this)}/> : null}*/}
                                    </div>
                                    <a>dashboard</a>
                                    <a>issues</a>
                                    <a>agileboard</a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        )
    }
}