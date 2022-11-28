import React, {Component} from "react";
// import '../App.css';
// import {Link} from "react-router-dom";
import axios from "axios";
class Create extends Component{

    state = {
        name: '',
        project_id: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveProduct = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://127.0.0.1:8000/api/sprintCreate', [this.state.name, this.state.project_id])
        this.setState({
            name: '',
            project_id: '',
        })
    }
    render() {
        return(
            <div>
                add in da bag
                <form onSubmit={this.saveProduct}>
                    <input type="text" name="name" onChange={this.handleInput} value={this.state.name}/>

                    <input type="number" name="project_id" onChange={this.handleInput} value={this.state.project_id}/>

                    <button type="submit">reeeee</button>
                </form>
            </div>
        );
    }
}
export default Create;