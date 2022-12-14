import React from 'react';
import Create from '../issues/Create';
import editIcon from '../../images/editIcon.png'
import EditYearMenu from '../years/EditYearMenu'

export class IssuesHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            create: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }


    toggleMenu() {
        const create = this.state.create

        this.setState({
            create: !create
        })
    }

    closeMenu = (e) => {
        this.props.changeHandler(e);
    }

    render() {
        return (
            <div className={"flex justify-between flex-row"}>
                <div className={"flex px-3 py-3"}>
                    <h1 className={"text-3xl mx-4"}>{this.props.data[1]}</h1>
                    <a onClick={this.toggleMenu} className={"flex p-2 border"}><img className={""} src={editIcon}></img></a>
                    {this.state.create ? <EditYearMenu data={this.props.data[0]} changeHandler={this.toggleMenu.bind(this)}/> : null}
                </div>

                <div className={"px-3 py-3"}>
                    <button className={"border-2 px-2 py-2 "}><Create/></button>
                </div>
                <div className={"flex flex-"}>
                    <div className={"px-3 py-3"}>
                        <button className={"border-2 px-2 py-2"}>burndown</button>
                    </div>
                </div>
            </div>
        )
    }
}
