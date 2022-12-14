import React from 'react';
import axios from "axios";

export default class EditYearMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '1',
            name: '',
        }

        this.name = this.name.bind(this);

    }


    closeMenu = (e) => {
        this.props.changeHandler(e);
    }



    name(event) {this.setState({name: event.target.value});}


    handleSubmit = (event) => {
        event.preventDefault();
        const packets = {
            name: this.state.name,
        };


        axios.put(`http://127.0.0.1:8000/api/year/update/${this.state.id}`, packets)
            .then(
                response => alert(JSON.stringify(response.data))
            )
            .catch(error => {
                console.log("ERROR:: ", error.response.data.message);
                alert("ERROR:: " + error.response.data.message);

            });
    }


    render() {
        return (
            <>
                <form className='absolute max-w-[520px] flex flex-row bg-light rounded-md'>
                    <div className='flex flex-col px-2 py-2.5'>
                        <span className='w-3/5 text-color'>new title:</span>
                        <input type="text" name="name" onChange={this.name} value={this.state.name} className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-color outline-none'/>
                        <button type="submit" onClick={this.handleSubmit} className='rounded-md border border-color px-1 py-1 text-color bg-[#4b4e69] outline-none'>Create</button>
                    </div>
                </form>
            </>
        )
    }
}
