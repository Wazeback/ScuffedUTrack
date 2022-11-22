import React from 'react';

export class Header extends React.Component {

    render() {
        return (
            <div className={"flex flex-row justify-between px-5 py-5"}>
                <h1 className={"text-4xl text-white"}>Youtrack</h1>
            </div>
        )
    }

}