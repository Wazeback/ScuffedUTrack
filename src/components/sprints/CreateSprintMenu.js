import React, {Component} from 'react';
import axios from "axios";

class CreateSprintMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            project_id: '',
            start: '',
            end: '',
            projects: []
        }

        this.name = this.name.bind(this);
        this.project_id = this.project_id.bind(this);
        this.start = this.start.bind(this);
        this.end = this.end.bind(this);

    }

    closeMenu = (e) => {
        this.props.changeHandler(e);
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/projects`)
            .then(res => {
                const projects = res.data;
                this.setState({ projects });
            })
    }

    name(event) {this.setState({name: event.target.value});}
    project_id(event) {this.setState({project_id: event.target.value});}
    start(event) {this.setState({start: event.target.value});}
    end(event) {this.setState({end: event.target.value});}


    handleSubmit = (event) => {
        event.preventDefault();
        const packets = {
            name: this.state.name,
            project_id: this.state.project_id,
            start: this.state.start,
            end: this.state.end,
        };



        axios.post('http://127.0.0.1:8000/api/sprint/create', packets)
            .then(
                response => alert(JSON.stringify(response.data))
            )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);
            });
    }


    render() {
        return (
            <>
                <form className='absolute max-w-[520px] flex flex-row bg-light rounded-md'>
                    <div className='flex flex-col px-2 py-2.5'>
                        <input type="text" name="name" onChange={this.name} value={this.state.name} required className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>
                        <h4>start date</h4><input type="date" name="start" onChange={this.start} value={this.state.start} required className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>
                        <h4>end date</h4><input type="date" name="end" onChange={this.end} value={this.state.end} required className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>


                                    <div className='group'>
                                        <div className='flex items-center py-2 px-2.5 text-sm text-color'>
                                            <span className='w-3/5'>title</span>
                                                    <select className='rounded-md border border-color px-1 py-1 text-color bg-[#4b4e69] outline-none '>
                                                    </select>
                                        </div>
                                    </div>
                                    <input className={'border border-color rounded-md px-2 py-2'} />
                            )

                    </div>
                </form>
            </>
        )
    }
}
export default CreateSprintMenu;