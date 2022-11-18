import React from "react";
import './Sidenav.css';

export default class Sidenav extends React.Component {

    constructor(props) {

        super(props);
        // set state open to false
        this.state = {open: false};
        // bind toggleNav to this (sidenav class)
        this.toggleNav = this.toggleNav.bind(this);

        this.state = {drop: false}
        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    toggleNav() {
        const open = this.state.open;
        // set this.state.open to true/false
        this.setState({
            open: !open,
        });
    }

    toggleDropdown() {
        const drop = this.state.drop

        this.setState( {
            drop: !drop
        })
    }

    render() {

        return(
            <>
                <div className='navbar flex'>
                    <button className='text-black' onClick={this.toggleNav}>a</button>
                </div>
                <nav className={this.state.open ? 'navAnimate bg-[#4b4e69] active' : 'navAnimate bg-[#4b4e69]'} >
                    <div className='w-full'>
                        <button className='text-white' onClick={this.toggleNav}>×</button>
                        <div className='bg-[#4b4e69] h-1/3 w-full p-5 flex flex-col items-center'>
                            <button className='border-2 border-grey-600 h-2/5 w-2/4 rounded-lg' onClick={this.toggleDropdown}>

                            </button>
                            <div className={this.state.drop ? 'dropdownAnimate h-2/5 w-3/5 rounded lg active' : 'dropdownAnimate h-2/5 w-2/4'}>
                                <ul className='ml-2 text-[#d5d8df] border-grey-600'>
                                  <li>Username</li>
                                  <li>Email</li>
                                  <li>Group</li>
                                </ul>
                            </div>
                        </div>
                        <div className='bg-[#4b4e69] h-2/3 w-full'>

                        </div>
                    </div>
                </nav>
            </>
        )
    }
}