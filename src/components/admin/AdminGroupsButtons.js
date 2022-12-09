import React, { useState } from 'react';
import AdminGroupsEdit  from './AdminGroupsEdit';
import axios from "axios";


export default class AdminGroupsButtons extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            group: '',
            year_id: '',
            selected_year: '1',
            yearsData: []
        }
        this.selected_year = this.selected_year.bind(this);
    }
    
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/years`)
            .then(res => {
                const yearsData = res.data;
                this.setState({ yearsData });
            })
    }

    selected_year(event) {this.setState({selected_year: event.target.value});}

    render() {
        return (
            <>
                <div className={"flex justify-between"}>
                    <div className={"flex flex-col justify-start py-1"}>
                        <select onChange={this.selected_year} className={"border border-color outline-none px-2 py-2 bg-light"}>
                            {this.state.yearsData.status ? this.state.yearsData.years.map((Data, i) => {
                                return(
                                    <>
                                        <option value={Data.id} >{Data.name}</option>
                                    </>
                                )
                            }) : null }
                        </select>
                        <button className={"border border-color px-2 py-2 bg-light"}>create group</button>
                    </div>

                    <div className={"grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2"}>
                        {this.state.yearsData.status ? this.state.yearsData.years.map((Year, i) => {
                            { if(this.state.selected_year == Year.id) {
                                return (
                                    <>
                                        {Year.groups.map((Group, i) => {
                                            return (
                                                <>
                                                    <div className={"my-1 ml-1"}>
                                                        <div
                                                            className={"flex flex-col border border-color bg-light w-full h-full py-1 px-2 text-sm"}>
                                                            <h4 className={"text-base"}>{Group.group}</h4>
                                                            <div>
                                                                <button>edit</button>
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
                                    </>
                                )
                            }}
                        }) : null }
                    </div>
                </div>
            </>
        )
    }
}