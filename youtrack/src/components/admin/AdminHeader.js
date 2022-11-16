import React from 'react';

export class AdminHeader extends React.Component {
    render() {
        return (
            <div className={"w-full h-[100px] flex justify-between text-5xl font-lg font-normal px-3 py-1"}>
                <h1>Youtrack</h1>
                <h1>Admin panel</h1>
            </div>
        )
    }
}