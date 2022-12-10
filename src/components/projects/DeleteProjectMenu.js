import React from 'react';
import axios from "axios";

export default class DeleteProjectMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            ProjectData: '',
        }

        this.id = this.id.bind(this);

    }

    closeMenu = (e) => {
        this.props.changeHandler(e);
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/projects`)
            .then(res => {
                const ProjectData = res.data;
                this.setState({ ProjectData });
            })
    }

    id(event) {this.setState({id: event.target.value});}


    handleSubmit = (event) => {
        event.preventDefault();
        const packets = {
            id: this.state.id,
        };


        axios.delete(`http://127.0.0.1:8000/api/project/delete/${this.state.id}`)
            .then(res => {
                alert(res.data);
            })
    }


    render() {
        return (
            <>
                <form className='absolute max-w-[520px] flex flex-row bg-light rounded-md'>
                    <div className='flex flex-col px-2 py-2.5'>
                        <span className='w-3/5 text-color'>Projects:</span>
                        <div className='flex items-center text-sm text-color'>
                            <select name="id"  onChange={this.id} className='rounded-md border border-color px-1 py-1 text-color bg-[#4b4e69] outline-none'>
                                {this.state.ProjectData.status ? this.state.ProjectData.projects.map((Project, i) => {
                                    return(
                                        <>
                                            <option name="id" value={Project.id}>{Project.name}</option>
                                        </>
                                    )
                                }) : <option name="loading" >loading in project</option> }
                                <option>please select a project</option>
                            </select>
                            <button type="submit" onClick={this.handleSubmit} className='rounded-md border ml-2  border-color px-1 py-1 text-color bg-[#4b4e69] outline-none'>Delete</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
