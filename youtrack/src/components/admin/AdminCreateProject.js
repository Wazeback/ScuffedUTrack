import React from 'react';
import AdminProjectMenu from "./AdminProjectMenu";

export default class AdminCreateProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {create: false}

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        const create = this.state.create

        this.setState({
            create: !create
        })
    }

    render() {
        return (
            <>
                <div className='ml-10'>
                    <button className={'border border-color px-2 py-2 bg-light'} onClick={this.toggleMenu}>Create Project</button>
                    {this.state.create ? <AdminProjectMenu changeHandler={this.toggleMenu.bind(this)}/> : null}
                </div>
            </>
        )
    }
}