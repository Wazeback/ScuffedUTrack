import React from 'react';
import axios from "axios";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

export default class CreateGroupMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            user_id: [],
            start: '',
            end: '',
            GroupData: []
        }

        this.name = this.name.bind(this);
        this.user_id = this.user_id.bind(this);

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]



        const MyComponent = () => (
            <Select options={options} />
        )

    }



    closeMenu = (e) => {
        this.props.changeHandler(e);
    }



    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/yearUsers`)
            .then(res => {
                const GroupData = res.data;
                this.setState({ GroupData });
            })
    }

    name(event) {this.setState({name: event.target.value});}
    user_id(event) {this.setState({user_id: [...this.state.user_id, ...event.target.value]});}


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
        // {console.log(this.state.GroupData)}
        return (
            <>
                <form className='absolute max-w-[520px] flex flex-row bg-light rounded-md'>
                    <div className='flex flex-col px-2 py-2.5'>
                        <span className='w-3/5 text-color'>Name:</span>
                        <input type="text" name="name" onChange={this.name} value={this.state.name} className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>
                        <span className='w-3/5 text-color'>Users:</span>
                        <div className='flex items-center text-sm text-color'>
                            <div className="w-full">
                                <label className="inline-block text-sm text-gray-600" htmlFor="Multiselect">Select multiple roles</label>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    defaultValue={["asd", "asdas"]}
                                    isMulti
                                    options={"sadas"}
                                />
                            </div>
                            <button type="submit" onClick={this.handleSubmit} className='rounded-md border ml-2  border-color px-1 py-1 text-color bg-[#4b4e69] outline-none'>Create</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
