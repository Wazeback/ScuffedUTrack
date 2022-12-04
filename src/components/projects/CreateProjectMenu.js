import React from 'react';
import axios from "axios";

export default class CreateProjectMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            project_id: '',
            start: '',
            end: '',
            yearsData: []
        }

        this.name = this.name.bind(this);
        this.start = this.start.bind(this);
        this.end = this.end.bind(this);

    }

    closeMenu = (e) => {
        this.props.changeHandler(e);
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/years`)
            .then(res => {
                const yearsData = res.data;
                this.setState({ yearsData });
            })
    }

    name(event) {this.setState({name: event.target.value});}
    start(event) {this.setState({start: event.target.value});}
    end(event) {this.setState({end: event.target.value});}


    handleSubmit = (event) => {
        event.preventDefault();
        const packets = {
            name: this.state.name,
            start: this.state.start,
            end: this.state.end,
        };



        axios.post('http://127.0.0.1:8000/api/project/create', packets)
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
                        <span className='w-3/5 text-color'>title:</span>
                        <input type="text" name="name" onChange={this.name} value={this.state.name} className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>
                        <span className='w-3/5 text-color'>start date:</span>
                        <input type="date" name="start" onChange={this.start} value={this.state.start}  className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>
                        <span className='w-3/5 text-color'>end date:</span>
                        <input type="date" name="end" onChange={this.end} value={this.state.end}  className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>
                        <button type="submit" onClick={this.handleSubmit} className='rounded-md border border-color px-1 py-1 text-color bg-[#4b4e69] outline-none'>Create</button>
                    </div>
                </form>
            </>
        )
    }
}
