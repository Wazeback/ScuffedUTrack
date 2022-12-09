import React from 'react';
import AdminGroupsButtons from './AdminGroupsButtons';
import AdminGroupsEdit from './AdminGroupsEdit';
// import AdminGroupsYears from './AdminGroupsYears';

export default class AdminGroups extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {groups: false}
    //     this.toggleGroups = this.toggleGroups.bind(this)
    // }
    // toggleGroups() {
    //     const groups = this.state.groups
    //     // set this.state.open to true/false
    //     this.setState( {
    //         groups: !groups
    //     })
    // }


    render() {
        return (
            <div className={"flex flex-col bg-div lg:w-[40%] w-full px-5 py-5 rounded-sm"}>
                

                    <AdminGroupsButtons/>
                


                <AdminGroupsEdit/>

            </div>
        )
    }
}