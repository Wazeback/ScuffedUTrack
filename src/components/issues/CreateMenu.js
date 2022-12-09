import React from 'react';
import {CreateData} from "./CreateData";
import axios from "axios";
export default class CreateMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sprint_id: '',
            priority_id: '1',
            subject_id: '1',
            title: '',
            description: '',
            state: '1',
            dueDate: '',
            estimation: '',
            spentTime: '',
            issueData: [],
        }

        this.priority_id = this.priority_id.bind(this);
        this.subject_id = this.subject_id.bind(this);
        this.title = this.title.bind(this);
        this.description = this.description.bind(this);
        // this.state.state = this.state.state.bind(this);
        this.dueDate = this.dueDate.bind(this);
        this.estimation = this.estimation.bind(this);
        this.spentTime = this.spentTime.bind(this);
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/allRelationsIssues`)
            .then(res => {
                const issueData = res.data;
                this.setState({ issueData });
            })
    }

    priority_id(event) {this.setState({priority_id: event.target.value});}
    subject_id(event) {this.setState({subject_id: event.target.value});}
    title(event) {this.setState({title: event.target.value});}
    description(event) {this.setState({description: event.target.value});}
    state(event) {this.setState({state: event.target.value});}
    dueDate(event) {this.setState({dueDate: event.target.value});}
    estimation(event) {this.setState({estimation: event.target.value});}
    spentTime(event) {this.setState({spentTime: event.target.value});}

    handleSubmit = (event) => {
        event.preventDefault();
        const packets = {
            sprint_id: this.state.issueData.sprint.map((Data, i) => {return (Data.id)}),
            priority_id: this.state.priority_id,
            subject_id: this.state.subject_id,
            title: this.state.title,
            description: this.state.description,
            state: this.state.state,
            dueDate: this.state.dueDate,
            estimation: this.state.estimation,
            spentTime: this.state.spentTime,
        };

        console.log(packets)

        axios.post('http://127.0.0.1:8000/api/issue/create', packets)
            .then(
                response => alert(JSON.stringify(response.data))
            )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);
            });
    }

    closeMenu = (e) => {
        this.props.changeHandler(e);
    }

    render() {
        return (
            <>
                <form method='POST' className='min-w-[360px] max-w-[520px] flex flex-row absolute bg-dark rounded-md'>
                    <div className='flex flex-row '>
                        <div className='w-[200px] pt-3 flex flex-col content-center border border-gray-600 rounded-l-md bg-light '>

                            <div className='group'>
                                <div className='flex py-2 px-2.5 text-sm text-color hover:bg-[#062640]'>
                                    <span className='w-3/5'>Group</span>
                                    <span className='w-2/5'>SD21-2</span>
                                </div>
                                <div className='flex py-2 px-2.5 text-sm text-color hover:bg-[#062640]'>
                                    <span className='w-3/5'>Priority</span>
                                    <select defaultValue={1} onChange={this.priority_id} className='w-2/5 text-[#8b9cd0] group-hover:text-[#bca9ff]'>
                                        {this.state.issueData.status ? this.state.issueData.priorities.map((Data, i) => {
                                            return (
                                                <option value={Data.id}>{Data.priority}</option>
                                            )
                                        }) : null}
                                    </select>
                                </div>
                                <div className='flex py-2 px-2.5 text-sm text-color hover:bg-[#062640]'>
                                    <span className='w-3/5'>Subject</span>
                                    <select defaultValue={1} onChange={this.subject_id} className='w-2/5 text-[#8b9cd0] group-hover:text-[#bca9ff]'>
                                        {this.state.issueData.status ? this.state.issueData.subjects.map((Data, i) => {
                                            return (
                                                <option value={Data.id}>{Data.subject}</option>
                                            )
                                        }) : null}
                                    </select>
                                </div>
                                <div className='flex py-2 px-2.5 text-sm text-color hover:bg-[#062640]'>
                                    <span className='w-3/5'>Assignee</span>
                                    <span className='w-2/5'>Niels</span>
                                </div>
                                <div className='flex py-2 px-2.5 text-sm text-color hover:bg-[#062640]'>
                                    <span className='w-3/5'>dueDate</span>
                                    <input type='date' name='dueDate' onChange={this.dueDate} value={this.state.dueDate} className='w-2/5' ></input>
                                </div>
                            </div>
                        </div>



                        {/*right side menu*/}
                        <div className='flex flex-col p-5 rounded-md'>
                            {/*TODO: max aantal woorden in de input*/}
                            <input type='text' placeholder='Titel' onChange={this.title} value={this.state.title} className='w-full h-[24px] mb-3 rounded-md text-color bg-input border border-gray-600'/>

                            <textarea placeholder='Omschrijving' onChange={this.description} value={this.state.description} className='w-full min-h-[140px] max-h-[140px] mb-3 whitespace-normal break-all rounded-md text-color bg-input border border-gray-600'/>

                            <div className='flex flex-row mb-4'>
                                <span className='text-sm text-color'>Estimation</span>
                                {/*TODO: alleen maar "valid" inputs (1m-1h-1d-1w)*/}
                                <input type='text' placeholder='1m 1h 1d 1w' onChange={this.estimation} value={this.state.estimation} className='w-[85px] ml-1 pl-0 rounded-md text-sm text-color bg-input border border-gray-600'/>
                                <span className='ml-1 text-xs leading-5 text-color'>1 dag = 8 uur,<br/> 1 week = 5 dagen </span>
                            </div>

                            <div>
                                {/*TODO: add card button veranderen van kleur als de form wel/niet valid is?*/}
                                <button onClick={this.handleSubmit} className='px-2 rounded-md text-[#aaacb2;] bg-input border border-gray-600'>Toevoegen</button>
                                <button onClick={this.closeMenu} className='ml-4 px-2 rounded-md text-[#aaacb2;] bg-input border border-gray-600 '>Annuleren</button>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}