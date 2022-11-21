import React from 'react';
import CreateMenu from "./CreateMenu";

export default class Create extends React.Component {
    constructor(props) {
        super(props);

        this.state = {create: false}

        this.toggleCreate = this.toggleCreate.bind(this)
    }

    toggleCreate() {
        const create = this.state.create

        this.setState({
            create: !create
        })
    }

    render() {

            return (
                <>
                    <div className='ml-10'>
                        <button onClick={this.toggleCreate}>Create Issue </button>
                        {this.state.create ?  <CreateMenu changeHandler={this.toggleCreate.bind(this)}/> : null}
                    </div>
                </>
            )

    }
}