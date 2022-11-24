import React from 'react';

export default class AdminGroupsYears extends React.Component {

    render () {
        return (
            <div className={"flex flex-col px-2 py-2"}>
                <select className={"border border-color outline-none px-2 py-2 bg-light"}>
                    <option value="sd20">sd20</option>
                    <option value="sd21">sd21</option>
                    <option value="sd22">sd22</option>
                </select>
                <button className={"border border-color px-2 py-2 bg-light"}>create group</button>
            </div>
        )
    }
}
