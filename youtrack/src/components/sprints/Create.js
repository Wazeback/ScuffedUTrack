import React, {Component} from "react";
// import '../App.css';
// import {Link} from "react-router-dom";
import axios from "axios";
class Create extends Component{

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
        console.log(this.state.project_id);
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
        return(
            <div>
                <form>
                    <input type="text" name="name" onChange={this.name} value={this.state.name}/>
                    <select name="project_id" id={"project_id"} onChange={this.project_id}>
                        {this.state.projects.status ? this.state.projects.projects.map((Data, i) => {
                            return(
                                <>
                                    <option name="project_id" value={Data.id}>{Data.name}</option>
                                </>
                                )
                        }) : <option name="loading" value={"loading in projects"}>loading in projects</option> }
//                       {console.log(this.state.projects.projects)}
                    </select>
                    <input type="date" name="start" onChange={this.start} value={this.state.start}/>
                    <input type="date" name="end" onChange={this.end} value={this.state.end}/>
                    <button type="submit" onClick={this.handleSubmit}>reeeee</button>
                </form>
            </div>
        );
    }
}
export default Create;