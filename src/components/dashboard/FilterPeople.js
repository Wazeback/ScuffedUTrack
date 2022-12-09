import React from "react"
import axios from "axios";

export class FilterPeople extends React.Component {


    state = {
        groupData: [],
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/group')
            .then(res => {
                const groupData = res.data;
                this.setState({groupData});

            })
    }

    render() {
        return (
            <>
                {this.state.groupData.status ? this.state.groupData.group.map((Data, i) => {
                    return (
                    Data.users.map((Data, i) => {
                    return (
                        <div key={Data.id}
                            className={"flex flex-col place-content-center text-2xl items-center"}>
                            <a>{Data.name}</a><br/>
                        </div>
                    )
                    }))
                }) : null}
            </>
        )
    }
}