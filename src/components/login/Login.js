import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/agileBoard">Agile-board</Link>
                        </li>
                        <li>
                            <Link to="/createyearmenu">Create Year Menu</Link>
                        </li>
                    </ul>
                </div>

                <Outlet />
            </>
        )
    }
}