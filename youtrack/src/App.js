 import './App.css';
import { AgileBoard } from './components/agileboard/AgileBoard';
import {AdminDashboard} from "./components/admin/AdminDashboard";
//import Sidenav from "./components/sidenav/Sidenav";
// import Create from "./components/issues/Create";
//import Create from "./components/sprints/Create"

function App() {
  return (
        <>
            <AgileBoard/>
            <AdminDashboard/>
        </>
  );
}

export default App;