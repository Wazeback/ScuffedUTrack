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
import CreateYearMenu from "./components/years/CreateYearMenu";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { Dashboard } from "./components/dashboard/Dashboard";
import CreateGroupMenu from "./components/groups/CreateGroupMenu";
import DeleteSprintMenu from "./components/sprints/DeleteSprintMenu";
import DeleteProjectMenu from "./components/projects/DeleteProjectMenu";
import DeleteYearMenu from "./components/years/DeleteYearMenu";
import EditYearMenu from "./components/years/EditYearMenu";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                    <Route path="/agileBoard" element={<AgileBoard />}/>
                    <Route path="/createyearmenu" element={<CreateYearMenu/>}/>
                    <Route path="/admindasboard" element={<AdminDashboard/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/deletesprintmenu" element={<DeleteSprintMenu/>}/>
                    <Route path="/deleteprojectmenu" element={<DeleteProjectMenu/>}/>
                    <Route path="/deleteyearmenu" element={<DeleteYearMenu/>}/>
                    <Route path="/edityearmenu" element={<EditYearMenu/>}/>
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
