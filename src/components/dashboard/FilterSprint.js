import React from "react"
import axios from "axios";

export class FilterSprint extends React.Component {


        state = {
                sprintData: [],
        }

        componentDidMount() {
                axios.get('http://127.0.0.1:8000/api/sprints')
                    .then(res => {
                            const sprintData = res.data;
                            this.setState({sprintData});

                    })
        }

        render() {
                return (
                    <>
                        {this.state.sprintData.status ? this.state.sprintData.sprint.map((Data, i) => {
                            return (
                                <div key={Data.id}
                                    className={"h-[90%] flex flex-col rounded-sm place-content-center text-2xl items-center w-[80%]"}>
                                    <a>{Data.name}</a><br/>
                                </div>
                            )
                        }) : null}
                    </>
                )
        }
}