import React from 'react';
import axios from "axios";
import Select from 'react-select'


export default class CreateGroupMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            user_id: [],
            start: '',
            end: '',
            GroupData: [],
            selectOptions : [],
        }

        this.name = this.name.bind(this);

    }

    closeMenu = (e) => {
        this.props.changeHandler(e);
    }

    handleChange(e){
        var id = e.map(function(Data) {
            return Data.value;
        });
        this.setState({user_id: id})
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/yearUsers`)
            .then(res => {
                const GroupData = res.data;
                this.setState({ GroupData });
                const options = GroupData.users.map(user => ({
                    "value" : user.id,
                    "label" : user.name
                }))
                this.setState({selectOptions: options})
                // console.log(this.state.selectOptions)
            })
    }

    name(event) {this.setState({name: event.target.value});}
    user_id(event) {this.setState({user_id: [this.state.user_id]});}


    handleSubmit = (event) => {
        event.preventDefault();
        const packets = {
            name: this.state.name,
            user_id: this.state.user_id,
        };

        console.log(packets);

        axios.post('http://127.0.0.1:8000/api/group/create', packets)
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
                        <span className='w-3/5 text-color'>Name:</span>
                        <input type="text" name="name" onChange={this.name} value={this.state.name} className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>
                        <span className='w-3/5 text-color'>Please select some users:</span>
                        <div className='flex items-center w-[350px] text-sm'>
                            <div className="w-full">
                                <div>
                                    <Select isMulti 
                                        options={this.state.selectOptions}
                                        onChange={this.handleChange.bind(this)} />
                                </div>
                            </div>
                            <button type="submit" onClick={this.handleSubmit} className='rounded-md border ml-2  border-color px-1 py-1 text-color bg-[#4b4e69] outline-none'>Create</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
