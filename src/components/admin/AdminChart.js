import React from 'react';
import  AdminChartBurndown from './AdminChartBurndown';
import AdminCreateProject from './AdminCreateProject';
import CreateProjectMenu from "./../projects/CreateProjectMenu";
import axios from "axios";

export class AdminChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            projectsData: []
        }
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/projects`)
            .then(res => {
                const projectsData = res.data;
                this.setState({ projectsData });
            })
    }

    render() {
        return (
            <div className={"flex flex-col py-3 md:px-10 px-3 bg-[#4b4e69] xl:h-full rounded-sm"}>
                <div className={"flex flex-row px-3 pb-3 "}>
                    <select className={"border border-color outline-none px-2 py-2 md:mr-4 mr-1 bg-light"}>
                        {this.state.projectsData.status ? this.state.projectsData.projects.map((Data, i) => {
                            return (
                                <>
                                    <option>{Data.name}</option>
                                </>
                            )
                        }) : null }
                    </select>
                    <AdminCreateProject/>
                </div>

                <AdminChartBurndown/>

            </div>
        )
    }
}