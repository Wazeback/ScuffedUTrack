import React from 'react';

export default class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        // set state open to false
        this.state = {drop: false}
        // bind toggleNav to this (sidenav class)
        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    toggleDropdown() {
        const drop = this.state.drop
        // set this.state.open to true/false
        this.setState( {
            drop: !drop
        })
    }

    render() {
        return (
            <>
                <div className='bg-[#4b4e69] h-1/3 w-full p-5 flex flex-col items-center'>
                    <button className='border-2 border-grey-600 h-2/5 w-2/4 rounded-lg' onClick={this.toggleDropdown}/>
                    <div className={this.state.drop ? 'dropdownAnimate h-2/5 w-3/5 rounded lg active' : 'dropdownAnimate h-2/5 w-3/5'}>
                        <ul className='ml-2 text-[#d5d8df] border-grey-600'>
                            <li>Username</li>
                            <li>Email</li>
                            <li>Group</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}