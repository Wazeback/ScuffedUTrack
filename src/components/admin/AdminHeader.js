import React from 'react';

export class AdminHeader extends React.Component {
    render() {
        return (
            <div className={"w-full h-[80px] flex justify-between text-stone-300 text-4xl font-lg md:px-12 px-3 md:py-4 my-3"}>
                <h1>Youtrack</h1>
                <h1>Admin panel</h1>
            </div>
        )
    }
}