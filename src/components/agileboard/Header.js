import React from 'react';
import Sidenav from '../sidenav/Sidenav'

export class Header extends React.Component {

    render() {
        return (
            <div className={"flex flex-row justify-between px-5 py-5"}>
                <Sidenav className={"text-4xl text-white"}>Youtrack</Sidenav>
            </div>
        )
    }
}