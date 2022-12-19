import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import './App.css';


import reportWebVitals from './reportWebVitals';
import AgileBoard from "./components/agileboard/AgileBoard";
import Login from "./components/login/Login";
import CreateProjectMenu from "./components/projects/CreateProjectMenu";
import CreateSprintMenu from "./components/sprints/CreateSprintMenu";
import {Dashboard} from "./components/dashboard/Dashboard";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                    <Route path="/agileBoard" element={<AgileBoard />}/>
                    <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
