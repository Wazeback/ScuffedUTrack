import { Header } from './Header';
import Issues from './Issues';
import React from 'react';

export default class AgileBoard extends React.Component {

    render() {
        return (
            <div className={"flex flex-col bg-[#181e34] min-h-[100vh]"}>
            <Header/>
            <Issues/>
            </div>
        )
    }

}