import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <Router>
        <Dashboard />
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
