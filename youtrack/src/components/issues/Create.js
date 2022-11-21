import React from 'react';
import CreateMenu from "./CreateMenu";

export default class Create extends React.Component {
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
                        <button onClick={this.toggleMenu}>Create Issue </button>
                        {this.state.create ?  <CreateMenu changeHandler={this.toggleMenu.bind(this)}/> : null}
                    </div>
                </>
            )
    }
}