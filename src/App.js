import logo from './logo.svg';
import './App.css';
import {AgileBoard} from "./components/agileboard/AgileBoard";
import {Dashboard} from "./components/dashboard/Dashboard";
import {AdminDashboard} from "./components/admin/AdminDashboard";
// import * as dotenv from "dotenv";
// dotenv.config();
//require('dotenv').config();

function App() {
  return (

      <>
          {/*<AgileBoard/>*/}
          {/*<Dashboard/>*/}
          {/*<AdminDashboard/>*/}
          <CreateSprintMenu/>
      </>
  );
}

export default App;
