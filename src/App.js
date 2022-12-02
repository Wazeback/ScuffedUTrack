import logo from './logo.svg';
import './App.css';
import {AgileBoard} from "./components/agileboard/AgileBoard";
import {Dashboard} from "./components/dashboard/Dashboard";
import {AdminDashboard} from "./components/admin/AdminDashboard";
import Create from "./components/sprints/Create";

function App() {
  return (

      <>
          <AgileBoard/>
          <Dashboard/>
          <AdminDashboard/>
          <Create/>
      </>
  );
}

export default App;
