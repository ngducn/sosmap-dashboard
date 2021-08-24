import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DasBoardPage from "./DasBoardPage";
function App() {
  return (
    <>
      <Router>
        <SideBar />
        <Switch>
          <Route path="/dashboard" exact component={DasBoardPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
