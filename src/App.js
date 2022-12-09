import logo from './logo.svg';
import './App.css';
import {AgileBoard} from "./components/agileboard/AgileBoard";
import {Dashboard} from "./components/dashboard/Dashboard";
import {AdminDashboard} from "./components/admin/AdminDashboard";
import CreateSprintMenu from "./components/sprints/CreateSprintMenu";
import CreateProjectMenu from "./components/projects/CreateProjectMenu";
import CreateGroupMenu from "./components/groups/CreateGroupMenu";


function App() {
  return (

      <>
          {/*<AgileBoard/>*/}
          {/*<Dashboard/>*/}
          <AdminDashboard/>
          {/*{<CreateSprintMenu/>}*/}
          {/*{<CreateProjectMenu/>}*/}
          {/*{<CreateGroupMenu/>}*/}
      </>
  );
}

export default App;
