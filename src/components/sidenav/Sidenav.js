import React from "react";
import Projects from "./Projects";
import Dropdown from "./Dropdown";
import './Sidenav.css';

export default class Sidenav extends React.Component {

    constructor(props) {
        super(props);
        // set state open to false
        this.state = {open: false};
        // bind toggleNav to this (sidenav class)
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        const open = this.state.open;
        // set this.state.open to true/false
        this.setState({
            open: !open,
        });
    }


    render() {
        return(
            <>
                <div className='navbar flex'>
                    <button className='text-4xl m-2 text-white' onClick={this.toggleNav}>Youtrack</button>
                </div>
                <nav className={this.state.open ? 'navAnimate bg-[#4b4e69] z-50 active' : 'navAnimate bg-[#4b4e69]'} >
                    <div className='w-full'>
                        <button className='text-white' onClick={this.toggleNav}>×</button>
                        <Dropdown/>
                        <Projects/>
                    </div>
                </nav>
            </>
        )
    }
}